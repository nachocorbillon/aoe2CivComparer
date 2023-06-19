import React, { useState } from 'react';
import isValidFormat from './utils/isvalidformat.js'

const JsonLoader = ({ onJsonLoad }) => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (event) => {
    const file = event.target.files[0];
    setFile1(file);
  };

  const handleFile2Change = (event) => {
    const file = event.target.files[0];
    setFile2(file);
  };

  const handleCompareClick = () => {
    if (file1 && file2) {
      const reader1 = new FileReader();
      const reader2 = new FileReader();
  
      reader1.onload = () => {
        try {
          const json1 = JSON.parse(reader1.result);
  
          reader2.onload = () => {
            try {
              const json2 = JSON.parse(reader2.result);
  
              if (isValidFormat(json1) && isValidFormat(json2)) {
                onJsonLoad(json1, json2);
              } else {
                alert('Invalid JSON format - check your files.');
                return;
              }
            } catch (error) {
              alert('Error. Check the JSON file of Civilization #2');
            }
          };
  
          reader2.readAsText(file2);
        } catch (error) {
          alert('Error. Check the JSON file of Civilization #1');
        }
      };
  
      reader1.readAsText(file1);
    }
  };

  const handleDemoClick = () => {
    const civs = [
      'Aztecs.json',
      'Huns.json',
      'Koreans.json',
      'Latin.json',
      'Mayans.json',
      'Merriemen.json',
      'Saiyajins.json',
      'Spanish.json',
    ];
  
    let randomIndex1 = Math.floor(Math.random() * civs.length);
    let randomIndex2 = Math.floor(Math.random() * civs.length);
  
   
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * civs.length);
    }
  
    const civ1File = civs[randomIndex1];
    const civ2File = civs[randomIndex2];
  
    fetch(`/demo-civs/${civ1File}`)
      .then((response) => response.json())
      .then((json1) => {
        fetch(`/demo-civs/${civ2File}`)
          .then((response) => response.json())
          .then((json2) => {
            if (isValidFormat(json1) && isValidFormat(json2)) {
              onJsonLoad(json1, json2);
            } else {
              alert('Invalid JSON format - check your demo files.');
            }
          })
          .catch((error) => {
            console.log(`Error loading demo ${civ2File}:`, error);
            alert(`Error loading demo JSON file`);
          });
      })
      .catch((error) => {
        console.log(`Error loading demo  ${civ1File}`, error);
        alert(`Error loading demo JSON file`);
      });
  };


  return (
    <div className="json-loader">

      <fieldset>
      <legend>Upload your Civilizations:</legend>
      <input type="file" onChange={handleFile1Change} />
      <input type="file" onChange={handleFile2Change} />
      </fieldset>
      <div style={{display:'flex',gap:'2rem'}}>
      <button onClick={handleCompareClick}>Compare Civs</button>
      <button onClick={handleDemoClick}>Load Demo Civs</button>
      </div>
    </div>
  );
};

export default JsonLoader;