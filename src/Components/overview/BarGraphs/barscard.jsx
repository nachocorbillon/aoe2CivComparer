import BarGraph from './bargraph.jsx';

const BarsCard = ({ title, alias1,alias2,legend1,legend2,legend3,valuea1, valuea2, valuea3,valueb1, valueb2, valueb3, total1, total2,total3, what,annotation}) => {
    return (
        <article className="barscard" title={annotation}>
        <summary>{title}</summary>
        <hgroup style={{ display: 'flex' }}>
          <h3 style={{ width: '50%', textAlign: 'left' }}>{alias1}</h3>
          <h3 style={{ width: '50%', textAlign: 'left' }}>{alias2}</h3>
        </hgroup>
            <BarGraph
                  label1={legend1}
                  label2={legend2}
                  label3={legend3}
                  amounta1={valuea1}
                  amounta2={valuea2}
                  amounta3={valuea3}
                  amountb1={valueb1}
                  amountb2={valueb2}
                  amountb3={valueb3}
                  t1={total1}
                  t2={total2}
                  t3={total3}
            /> 
            <details className='barInfo'>
                  <summary>Info</summary>
            <ul>
                  <li>{alias1} has {valuea1} {legend1} {what} of {total1} total {what||legend1}.</li>
                  <li>{alias2} has {valueb1} {legend1} {what} of {total1} total {what||legend1}.</li>
                  <li>{alias1} has {valuea2} {legend2} {what} of {total2} total {what||legend2}.</li>
                  <li>{alias2} has {valueb2} {legend2} {what} of {total2} total {what||legend2}.</li>
                  {legend3 && (
                  <div>
                  <li>{alias1} has {valuea3} {legend3} {what} of {total3} total {what||legend3}.</li>
                  <li>{alias2} has {valueb3} {legend3} {what} of {total3} total {what||legend3}.</li>
                  </div>
                  )}
                  </ul>
            </details>
      </article>);
}

export default BarsCard;