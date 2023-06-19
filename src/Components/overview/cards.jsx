import React from 'react';
import BarsCard from './BarGraphs/barscard';

const Cards = ({
  name1,
  name2,
  buildings1,
  units1,
  techs1,
  buildings2,
  units2,
  techs2,
  totals,
  civ1UnitsBarracks,
  civ1BarracksBenefits,
  civ1UnitsArcheryRange,
  civ1ArcheryRangesBenefits,
  civ1UnitsStable,
  civ1StableBenefits,
  civ2UnitsBarracks,
  civ2BarracksBenefits,
  civ2UnitsArcheryRange,
  civ2ArcheryRangesBenefits,
  civ2UnitsStable,
  civ2StableBenefits,
  totalUnitsBarracks,
  totalBarracksBenefits,
  totalUnitsArcheryRange,
  totalArcheryRangesBenefits,
  totalUnitsStable,
  totalStableBenefits,
  etcCiv1Blacksmith,
  etcCiv1Monastery,
  etcCiv1University,
  etcCiv1Castle,
  etcCiv2Blacksmith,
  etcCiv2Monastery,
  etcCiv2University,
  etcCiv2Castle,
  etcCiv1TC,
  etcCiv1Lumber,
  etcCiv1Mining,
  etcCiv1Market,
  etcCiv2TC,
  etcCiv2Lumber,
  etcCiv2Mining,
  etcCiv2Market,
  totalTechBlacksmith,
  totalTechMonastery,
  totalTechUniversity,
  totalTechCastle,
  totalTechTC,
  totalTechLumber,
  totalTechMining,
  totalTechMarket,
  civ1TotalDock,
  civ1TotalSiegeWorkshop,
  civ2TotalDock,
  civ2TotalSiegeWorkshop,
  totalDock,
  totalSiegeWorkshop,
}) => (
<details id="overview">
    <summary  className="banner" id="overviewsummary">Civilizations Overview</summary>
    <section className="cards">
<BarsCard
    title="Global"
    alias1={name1}
    alias2={name2}
    legend1="Buildings"
    legend2="Units"
    legend3="Techs"
    valuea1={buildings1.length}
    valuea2={units1.length}
    valuea3={techs1.length}
    valueb1={buildings2.length}
    valueb2={units2.length}
    valueb3={techs2.length}
    total1={totals.totalBuildings}
    total2={totals.totalUnits}
    total3={totals.totalTechs}
    what=""
    annotation="This card indicates the amount of items corrsponding to Buildings, Units, and Techs the Civilizations have in comparison with the total."
  />



    <BarsCard
    title="Military Specialty"
    alias1={name1}
    alias2={name2}
    legend1="Barrack"
    legend2="Archery Range"
    legend3="Stable"
    valuea1={civ1UnitsBarracks+civ1BarracksBenefits}
    valuea2={civ1UnitsArcheryRange+civ1ArcheryRangesBenefits}
    valuea3={civ1UnitsStable+civ1StableBenefits}
    valueb1={civ2UnitsBarracks+civ2BarracksBenefits}
    valueb2={civ2UnitsArcheryRange+civ2ArcheryRangesBenefits}
    valueb3={civ2UnitsStable+civ2StableBenefits}
    total1={totalUnitsBarracks+totalBarracksBenefits}
    total2={totalUnitsArcheryRange+totalArcheryRangesBenefits}
    total3={totalUnitsStable+totalStableBenefits}
    what="capacities"
    annotation="This card indicates the sum of Military units the Civilizations can create and the Blacksmith technologies they have available."
  /> 

  

<BarsCard
    title="Technological Capacity"
    alias1={name1}
    alias2={name2}
    legend1="Blacksmith"
    legend2="Monastery"
    legend3="University & Castle"
    valuea1={etcCiv1Blacksmith}
    valuea2={etcCiv1Monastery}
    valuea3={etcCiv1University+etcCiv1Castle}
    valueb1={etcCiv2Blacksmith}
    valueb2={etcCiv2Monastery}
    valueb3={etcCiv2University+etcCiv2Castle}
    total1={totalTechBlacksmith}
    total2={totalTechMonastery}
    total3={totalTechUniversity+totalTechCastle}
    what="technologies"
    annotation="This card indicates the amount of technologies the Civilizations in three aspects (Blacksmith,Monastery, and University & Castle) have in comparison with the total."
  />

<BarsCard
    title="Economical Capacity"
    alias1={name1}
    alias2={name2}
    legend1="Town Center"
    legend2="Mining & Lumber Camps"
    legend3="Market"
    valuea1={etcCiv1TC}
    valuea2={etcCiv1Lumber+etcCiv1Mining}
    valuea3={etcCiv1Market}
    valueb1={etcCiv2TC}
    valueb2={etcCiv2Lumber+etcCiv2Mining}
    valueb3={etcCiv2Market}
    total1={totalTechTC}
    total2={totalTechLumber+totalTechMining}
    total3={totalTechMarket}
    what="technologies"
    annotation="This card indicates the amount of eco techs the Civilizations have available in comparison with the total."
  />

<BarsCard
    title="Dock & Siege Workshop"
    alias1={name1}
    alias2={name2}
    legend1="Dock"
    legend2="Siege Workshop"

    valuea1={civ1TotalDock}
    valuea2={civ1TotalSiegeWorkshop}

    valueb1={civ2TotalDock}
    valueb2={civ2TotalSiegeWorkshop}

    total1={totalDock}
    total2={totalSiegeWorkshop}
    what="capacities"
    annotation="This card indicates the amount of units and techs the Civilizations have in two aspects (Dock & Siege Workshop) comparison with the total of those the game offers"
  />  
  </section> 
  </details>  

  );

  export default Cards;