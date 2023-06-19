import React from 'react';
import BarRow from './BarRow';


const Bars = ({ legend1,legend2,legend3,amount1, amount2, amount3, total1, total2,total3}) => {
let color1,color2,color3;
if (legend3 && amount3 && total3) {color1="#556B2F";color2="#2F4F4F";color3="firebrick";}
else{color1="#000066";color2=" #8B0000";color3="#000000";}
  
    return (
<div className="bar-graph">
    {legend1 && amount1>0 && total1>0  && (
    <BarRow amount={amount1} total={total1} legend={legend1} color={color1}/>
    )}
{legend1 && (amount1<=0  ||total1<=0)  && (<div className="category" style={{ height:'2rem',display: 'flex', justifyContent: 'space-between', width: `100%`,fontSize:'0.8rem' }}> </div>)}

    {legend2 && amount2>0  && total2>0  && (
    <BarRow amount={amount2} total={total2} legend={legend2} color={color2} />
    )}
{legend2 && (amount2<=0  || total2<=0)  && (<div className="category" style={{ height:'2rem',display: 'flex', justifyContent: 'space-between', width: `100%`,fontSize:'0.8rem' }}> </div>)}


    {legend3 && amount3>0  && total3>0  && (
    <BarRow amount={amount3} total={total3} legend={legend3} color={color3} />
    )}
{legend3 && (amount3<=0 || total3<=0)  && (<div className="category" style={{ height:'2rem',display: 'flex', justifyContent: 'space-between', width: `100%`,fontSize:'0.8rem' }}> </div>)}


</div>

  );
};

export default Bars;