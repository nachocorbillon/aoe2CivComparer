import Bars from './bars.jsx';

const BarGraph = ({ label1,label2,label3,amounta1, amounta2, amounta3,amountb1, amountb2, amountb3, t1, t2,t3}) => {
    return (
        <section>
<Bars
legend1={label1}
legend2={label2}
legend3={label3}
amount1={amounta1}
amount2={amounta2}
amount3={amounta3}
total1={t1}
total2={t2}
total3={t3}
className="left-bars"
/>
<Bars
legend1={label1}
legend2={label2}
legend3={label3}
amount1={amountb1}
amount2={amountb2}
amount3={amountb3}
total1={t1}
total2={t2}
total3={t3}
className="right-bars"
/>
</section> 
);
}

export default BarGraph;