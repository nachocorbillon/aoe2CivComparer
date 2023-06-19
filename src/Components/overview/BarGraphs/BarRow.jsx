import React from 'react';

const getPercentage = (count, total) => {
  if (count===0) count=1;
    const percentage = (count / total) * 100;
    return Math.round(percentage * 10) / 10; 
  };
  
const BarRow = ({ amount, total, legend, color }) => {
  const percentage = getPercentage(amount, total);

  return (
    
    <div className="bar-row">
   
      <div className="category" style={{ display: 'flex', justifyContent: 'space-between',minWidth: '50%', width: `${percentage}%`,fontSize:'0.8rem' }}>
        <span>{legend}</span>
        <span style={{ textAlign: 'right' }}>{percentage}%</span>
      </div>  
  
      <div className="bar" style={{ width: `${percentage}%`,  height: '0.8rem', backgroundColor: color }}></div>

      </div>
  );
};

export default BarRow;