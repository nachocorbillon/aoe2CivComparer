import React from 'react';

const CivsShowcase = ({ name1, flag1, civ1total, name2, flag2, civ2total }) => {
  const flagColors = [
  '#000000',
  '#ffffff',
  '#d90000',
  '#00ad36',
  '#f9e90d',
  '#000080',
  '#ff9933',
  '#00a2dd',
  '#540e7d',
  '#e03ad5',
  '#49ebad',
  '#421e01',
  '#5c5c5c',
  '#ffabca',
  '#abcfff'
];

const civ1Color1 = flag1[0] >= 0 ? flagColors[flag1[0]] : "linear-gradient(45deg, goldenrod 60%, firebrick)";
const civ1Color2 = flag1[1] >= 0 ? flagColors[flag1[1]] : "black";
const civ2Color1 = flag2[0] >= 0 ? flagColors[flag2[0]] : "linear-gradient(45deg, royalblue 50%, goldenrod)";
const civ2Color2 = flag2[1] >= 0 ? flagColors[flag2[1]] : "black";

return (

   
<div style={{ display: 'flex', maxWidth: '800px', justifyContent:'center',margin:'auto',gap:'9vw'}} >
  
  <div style={{ display: 'flex', flexDirection:'column', alignItems:'center', maxWidth: '375px'}}>
    <div style={{ display: 'flex',height: '100px', width: '100px',justifyContent:'center' }}>
      <div style={{ background: civ1Color1, height: '100px', width: '50px' }}></div>
      <div style={{ background: civ1Color2, height: '100px', width: '50px' }}></div>
</div>
      <h2 style={{textTransform:'uppercase',justifyContent:'center',color:'hsla(25, 64%, 20%, 1)',fontWeight:'bold'}}>{name1}</h2>
  </div>

  <div style={{ display: 'flex', flexDirection:'column', alignItems:'center', maxWidth: '375px'}}>
    <div style={{ display: 'flex',height: '100px', width: '100px',justifyContent:'center' }}>
      <div style={{ background: civ2Color1, height: '100px', width: '50px' }}></div>
      <div style={{ background: civ2Color2, height: '100px', width: '50px' }}></div>
</div>
      <h2 style={{textTransform:'uppercase',justifyContent:'center',color:'hsla(25, 64%, 20%, 1)',fontWeight:'bold'}}>{name2}</h2>
  </div>

  </div>  
);
};


export default CivsShowcase;