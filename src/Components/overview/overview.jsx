import React from 'react';
import Cards from './cards.jsx';

const Overview = ({
  totalsCount,
  totalBlacksmith,
  name1,
  name2,
  units1,
  buildings1,
  techs1,
  etcCiv1,
  milCiv1,
  civ1Blacksmith,
  units2,
  buildings2,
  techs2,
  etcCiv2,
  milCiv2,
  civ2Blacksmith,

}) => {
 
  const totals = totalsCount.totals;
  const totalUpb = totalsCount.totalUpb;
  const totalTpb = totalsCount.totalTpb;
  const totalBarracksBenefits = totalBlacksmith.barracksBenefits;
  const totalArcheryRangesBenefits = totalBlacksmith.archeryRangesBenefits;
  const totalStableBenefits = totalBlacksmith.stableBenefits;
  if (totals === null || totalUpb === null || totalTpb === null)
  {return <div>Loading...</div>}


  // FULL ECO AND TECH CAPACITIES
  //eco capacities
  const totalTechTC =totalTpb["Town Center"];
  const totalTechLumber =totalTpb["Lumber Camp"];
  const totalTechMining =totalTpb["Mining Camp"];
  const totalTechMarket =totalTpb.Market;
  //tech capacities
  const totalTechBlacksmith =totalTpb.Blacksmith;
  const totalTechMonastery =totalTpb.Monastery;
  const totalTechUniversity =totalTpb.University;
  const totalTechCastle =totalTpb.Castle;
  //dock & siege workshop techs
  const totalTechDock =totalTpb.Dock;
  const totalTechSiegeWorkshop =totalTpb["Siege Workshop"];


  //FULL MILITARY CAPACITIES
  const totalUnitsBarracks =totalUpb.Barracks;
  const totalUnitsArcheryRange =totalUpb["Archery Range"];
  const totalUnitsStable =totalUpb.Stable;


   //dock & siege workshop units
  const totalUnitsDock =totalUpb.Dock;
  const totalUnitsSiegeWorkshop =totalUpb["Siege Workshop"];

  //TOTAL DOCK AND SIEGE
  const totalDock=totalTechDock+totalUnitsDock;
  const totalSiegeWorkshop=totalTechSiegeWorkshop+totalUnitsSiegeWorkshop;


// CIV 1 ECO AND TECH CAPACITIES
//eco capacities civ1
const etcCiv1TC =etcCiv1["Town Center"];
const etcCiv1Lumber =etcCiv1["Lumber Camp"];
const etcCiv1Mining =etcCiv1["Mining Camp"];
const etcCiv1Market =etcCiv1.Market;
//tech capacities civ1
const etcCiv1Blacksmith =etcCiv1.Blacksmith;
const etcCiv1Monastery =etcCiv1.Monastery;
const etcCiv1University =etcCiv1.University;
const etcCiv1Castle =etcCiv1.Castle;
 //dock & siege workshop techs civ1
const etcCiv1TechDock =etcCiv1.Dock;
const etcCiv1TechSiegeWorkshop =etcCiv1["Siege Workshop"];
//Civ1 MILITARY CAPACITIES
//main buildings
 const civ1UnitsBarracks =milCiv1.Barracks;
 const civ1UnitsArcheryRange =milCiv1["Archery Range"];
 const civ1UnitsStable =milCiv1.Stable;
 //blacskmith benefits
const civ1BarracksBenefits = civ1Blacksmith.barracksBenefits;
const civ1ArcheryRangesBenefits = civ1Blacksmith.archeryRangesBenefits;
const civ1StableBenefits = civ1Blacksmith.stableBenefits;
// Civ1 dock & siege workshop units
const civ1UnitsDock =milCiv1.Dock;
const civ1UnitsSiegeWorkshop =milCiv1["Siege Workshop"];
//Civ1 TOTAL DOCK AND SIEGE
const civ1TotalDock=etcCiv1TechDock+civ1UnitsDock;
const civ1TotalSiegeWorkshop=etcCiv1TechSiegeWorkshop+civ1UnitsSiegeWorkshop;


/*******CIVILIZATION 2********/
  // CIV 2 ECO AND TECH CAPACITIES
  //eco capacities civ2
  const etcCiv2TC =etcCiv2["Town Center"];
  const etcCiv2Lumber =etcCiv2["Lumber Camp"];
  const etcCiv2Mining =etcCiv2["Mining Camp"];
  const etcCiv2Market =etcCiv2.Market;
  //tech capacities civ2
  const etcCiv2Blacksmith =etcCiv2.Blacksmith;
  const etcCiv2Monastery =etcCiv2.Monastery;
  const etcCiv2University =etcCiv2.University;
  const etcCiv2Castle =etcCiv2.Castle;
 //dock & siege workshop techs civ
 const etcCiv2TechDock =etcCiv2.Dock;
 const etcCiv2TechSiegeWorkshop =etcCiv2["Siege Workshop"];
  //Civ2 MILITARY CAPACITIES
  //main buildings
   const civ2UnitsBarracks =milCiv2.Barracks;
   const civ2UnitsArcheryRange =milCiv2["Archery Range"];
   const civ2UnitsStable =milCiv2.Stable;
  //blacskmith benefits
const civ2BarracksBenefits = civ2Blacksmith.barracksBenefits;
const civ2ArcheryRangesBenefits = civ2Blacksmith.archeryRangesBenefits;
const civ2StableBenefits = civ2Blacksmith.stableBenefits;
  //Civ2 dock & siege workshop units
  const civ2UnitsDock =milCiv2.Dock;
  const civ2UnitsSiegeWorkshop =milCiv2["Siege Workshop"];
  //Civ2 TOTAL DOCK AND SIEGE
  const civ2TotalDock=etcCiv2TechDock+civ2UnitsDock;
  const civ2TotalSiegeWorkshop=etcCiv2TechSiegeWorkshop+civ2UnitsSiegeWorkshop;


  return (
    <div>
      <Cards
        name1={name1}
        name2={name2}
        buildings1={buildings1}
        units1={units1}
        techs1={techs1}
        buildings2={buildings2}
        units2={units2}
        techs2={techs2}
        totals={totals}
        civ1UnitsBarracks={civ1UnitsBarracks}
        civ1BarracksBenefits={civ1BarracksBenefits}
        civ1UnitsArcheryRange={civ1UnitsArcheryRange}
        civ1ArcheryRangesBenefits={civ1ArcheryRangesBenefits}
        civ1UnitsStable={civ1UnitsStable}
        civ1StableBenefits={civ1StableBenefits}
        civ2UnitsBarracks={civ2UnitsBarracks}
        civ2BarracksBenefits={civ2BarracksBenefits}
        civ2UnitsArcheryRange={civ2UnitsArcheryRange}
        civ2ArcheryRangesBenefits={civ2ArcheryRangesBenefits}
        civ2UnitsStable={civ2UnitsStable}
        civ2StableBenefits={civ2StableBenefits}
        totalUnitsBarracks={totalUnitsBarracks}
        totalBarracksBenefits={totalBarracksBenefits}
        totalUnitsArcheryRange={totalUnitsArcheryRange}
        totalArcheryRangesBenefits={totalArcheryRangesBenefits}
        totalUnitsStable={totalUnitsStable}
        totalStableBenefits={totalStableBenefits}
        etcCiv1Blacksmith={etcCiv1Blacksmith}
        etcCiv1Monastery={etcCiv1Monastery}
        etcCiv1University={etcCiv1University}
        etcCiv1Castle={etcCiv1Castle}
        etcCiv2Blacksmith={etcCiv2Blacksmith}
        etcCiv2Monastery={etcCiv2Monastery}
        etcCiv2University={etcCiv2University}
        etcCiv2Castle={etcCiv2Castle}
        etcCiv1TC={etcCiv1TC}
        etcCiv1Lumber={etcCiv1Lumber}
        etcCiv1Mining={etcCiv1Mining}
        etcCiv1Market={etcCiv1Market}
        etcCiv2TC={etcCiv2TC}
        etcCiv2Lumber={etcCiv2Lumber}
        etcCiv2Mining={etcCiv2Mining}
        etcCiv2Market={etcCiv2Market}
        totalTechBlacksmith={totalTechBlacksmith}
        totalTechMonastery={totalTechMonastery}
        totalTechUniversity={totalTechUniversity}
        totalTechCastle={totalTechCastle}
        totalTechTC={totalTechTC}
        totalTechLumber={totalTechLumber}
        totalTechMining={totalTechMining}
        totalTechMarket={totalTechMarket}
        civ1TotalDock={civ1TotalDock}
        civ1TotalSiegeWorkshop={civ1TotalSiegeWorkshop}
        civ2TotalDock={civ2TotalDock}
        civ2TotalSiegeWorkshop={civ2TotalSiegeWorkshop}
        totalDock={totalDock}
        totalSiegeWorkshop={totalSiegeWorkshop}
      />
    </div>
  );
}

export default Overview;