import React, { useState } from 'react';
import JsonLoader from './Components/jsonloader.jsx';
import CivComparator from './Components/civcomparator.jsx';
import './App.css';

function App() {
  const [json1, setJson1] = useState(null);
  const [json2, setJson2] = useState(null);
  const [showComparator, setShowComparator] = useState(false);  

  const handleJsonLoad = (loadedJson1, loadedJson2) => {
    setJson1(loadedJson1);
    setJson2(loadedJson2);
    setShowComparator(true); 
  };

  return (
    <div>
      <hgroup id="maintitle" className='banner' style={{background:'linear-gradient(90deg,#553303,#773304,#7d441c,#773305,#663303)'}}>
      <h2>Age of Empires 2: The Age of Kings</h2>
      <h1>Civilization Comparison</h1>
      <h3>based on Krakenmeister's <a href="https://krakenmeister.com/civbuilder/">Civ Builder</a> </h3>
      </hgroup>

      <JsonLoader onJsonLoad={handleJsonLoad} />
      {showComparator && json1 && json2 && (
        <div>
          <CivComparator civ1={json1} civ2={json2} />
        </div>
      )}

      <footer className='banner'style={{display:'none', position:'fixed', background:'linear-gradient(90deg,#553301,#663303,#773304,#773305,#7d441c)',  bottom:'0', margin:'0', width:'100vw', textAlign:'right', color:'lightcyan' }}>Made by <a style={{textDecoration:'none', color:'lightcyan' }} href="https://github.com/nachocorbillon">Nacho Corbillón</a></footer>
    </div>
  );
}

export default App;