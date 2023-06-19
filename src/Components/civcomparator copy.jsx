import React, { useState, useEffect, useMemo } from 'react';
import getEcoTechCapacities from './utils/tecCapacities.js'
import getMilitary from './utils/milCapacities.js'
import countBlacksmithBenefits from './utils/totals_count/blacksmith.js'
import countCivBlacksmithBenefits from './utils/civBlacksmith.js'
import Overview from './overview/cards.jsx/index.js';
import TotalsCount from './utils/totals_count/totals_count.js';
import getBuildingPoints from './utils/points_count/buildings_points.js';
import getUnitsPoints from './utils/points_count/units_points.js';
import getTechsPoints from './utils/points_count/techs_points.js';
import sumCategoryPoints from './utils/points_count/category_points.js';

const CivComparator = ({ civ1, civ2 }) => {

  const totalsCount = TotalsCount();
  const totals = totalsCount.totals;
  const totalUpb = totalsCount.totalUpb;
  const totalTpb = totalsCount.totalTpb;
  const totalBlacksmith = countBlacksmithBenefits();
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


  // CIV NAMES
  const name1 = civ1.alias;
  const name2 = civ2.alias;

/*******CIVILIZATION 1******* */
// CIV 1 TECH TREE
  const units1 = civ1.tree[0];
  const buildings1 = civ1.tree[1];
  const techs1 = civ1.tree[2];

// CIV 1 ECO AND TECH CAPACITIES
const etcCiv1 = getEcoTechCapacities(techs1);
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
const milCiv1= getMilitary(units1);
//main buildings
 const civ1UnitsBarracks =milCiv1.Barracks;
 const civ1UnitsArcheryRange =milCiv1["Archery Range"];
 const civ1UnitsStable =milCiv1.Stable;

 //blacskmith benefits
const civ1Blacksmith = countCivBlacksmithBenefits(techs1);
const civ1BarracksBenefits = civ1Blacksmith.barracksBenefits;
const civ1ArcheryRangesBenefits = civ1Blacksmith.archeryRangesBenefits;
const civ1StableBenefits = civ1Blacksmith.stableBenefits;

// Civ1 dock & siege workshop units
const civ1UnitsDock =milCiv1.Dock;
const civ1UnitsSiegeWorkshop =milCiv1["Siege Workshop"];

//Civ1 TOTAL DOCK AND SIEGE
const civ1TotalDock=etcCiv1TechDock+civ1UnitsDock;
const civ1TotalSiegeWorkshop=etcCiv1TechSiegeWorkshop+civ1UnitsSiegeWorkshop;
/**********************************************/



/*******CIVILIZATION 2********/
  // CIV 2 TECH TREE
  const units2 = civ2.tree[0];
  const buildings2 = civ2.tree[1];
  const techs2 = civ2.tree[2];
  // CIV 2 ECO AND TECH CAPACITIES
  const etcCiv2= getEcoTechCapacities(techs2);
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
  const milCiv2= getMilitary(units2);
  //main buildings
   const civ2UnitsBarracks =milCiv2.Barracks;
   const civ2UnitsArcheryRange =milCiv2["Archery Range"];
   const civ2UnitsStable =milCiv2.Stable;
  //blacskmith benefits
const civ2Blacksmith = countCivBlacksmithBenefits(techs2);
const civ2BarracksBenefits = civ2Blacksmith.barracksBenefits;
const civ2ArcheryRangesBenefits = civ2Blacksmith.archeryRangesBenefits;
const civ2StableBenefits = civ2Blacksmith.stableBenefits;

  //Civ2 dock & siege workshop units
  const civ2UnitsDock =milCiv2.Dock;
 
  const civ2UnitsSiegeWorkshop =milCiv2["Siege Workshop"];
  
  //Civ2 TOTAL DOCK AND SIEGE
  const civ2TotalDock=etcCiv2TechDock+civ2UnitsDock;
  const civ2TotalSiegeWorkshop=etcCiv2TechSiegeWorkshop+civ2UnitsSiegeWorkshop;
/**********************************************/
// POINT TABLES VARIABLES

//MAJOR POINTS ARRAYS
const civ1BuildingPoints = getBuildingPoints(buildings1);
const civ2BuildingPoints = getBuildingPoints(buildings2);
const civ1UnitsPoints= getUnitsPoints(units1);
const civ2UnitsPoints= getUnitsPoints(units2);
const civ1TechsPoints= getTechsPoints(units1);
const civ2TechsPoints= getTechsPoints(units2);


//TOTAL POINTS
let totalCiv1BuildingPoints = 0;
for (const value of Object.values(civ1BuildingPoints)) {
  totalCiv1BuildingPoints += value;
}

let totalCiv2BuildingPoints = 0;
for (const value of Object.values(civ2BuildingPoints)) {
  totalCiv2BuildingPoints += value;
}

let totalCiv1UnitsPoints = 0;
for (const [, points] of civ1UnitsPoints) {
  totalCiv1UnitsPoints += points;
}

let totalCiv2UnitsPoints = 0;
for (const [, points] of civ2UnitsPoints) {
  totalCiv2UnitsPoints += points;
}

let totalCiv1TechsPoints = 0;
for (const [, points] of civ1TechsPoints) {
  totalCiv1TechsPoints += points;
}

let totalCiv2TechsPoints = 0;
for (const [, points] of civ2TechsPoints) {
  totalCiv2TechsPoints += points;
}


const totalCiv1points=totalCiv1BuildingPoints+totalCiv1UnitsPoints+totalCiv1TechsPoints;
const totalCiv2points=totalCiv2BuildingPoints+totalCiv2UnitsPoints+totalCiv2TechsPoints;

//MLITARY POINTS
// civ1 military
const totalCiv1BarracksPoints = sumCategoryPoints("Barracks", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1ArcheryRangePoints = sumCategoryPoints("Archery Range", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1StablePoints = sumCategoryPoints("Stable", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1MilitaryPoints=totalCiv1BarracksPoints+totalCiv1ArcheryRangePoints+totalCiv1StablePoints;
// civ2 military
const totalCiv2BarracksPoints = sumCategoryPoints("Barracks", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2ArcheryRangePoints = sumCategoryPoints("Archery Range", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2StablePoints = sumCategoryPoints("Stable", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2MilitaryPoints=totalCiv2BarracksPoints+totalCiv2ArcheryRangePoints+totalCiv2StablePoints;
//civ1 Economy
const totalCiv1TownCenterPoints = sumCategoryPoints("Town Center", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1LumberCampPoints = sumCategoryPoints("Lumber Camp", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1MiningCampPoints =sumCategoryPoints("Mining Camp", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1EconomyPoints=totalCiv1TownCenterPoints+totalCiv1LumberCampPoints+totalCiv1MiningCampPoints;
//civ2 Economy
const totalCiv2TownCenterPoints = sumCategoryPoints("Town Center", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2LumberCampPoints = sumCategoryPoints("Lumber Camp", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2MiningCampPoints =sumCategoryPoints("Mining Camp", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2EconomyPoints=totalCiv2TownCenterPoints+totalCiv2LumberCampPoints+totalCiv2MiningCampPoints;
//civ1 Technology
const totalCiv1BlacksmithPoints = sumCategoryPoints("Blacksmith", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1UniversityPoints = sumCategoryPoints("University", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1CastlePoints = sumCategoryPoints("Castle", civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints);
const totalCiv1TechnologyPoints = totalCiv1BlacksmithPoints + totalCiv1UniversityPoints +totalCiv1CastlePoints;

//civ2 Technology
const totalCiv2BlacksmithPoints = sumCategoryPoints("Blacksmith", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2UniversityPoints = sumCategoryPoints("University", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2CastlePoints = sumCategoryPoints("Castle", civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints);
const totalCiv2TechnologyPoints = totalCiv2BlacksmithPoints + totalCiv2UniversityPoints +totalCiv2CastlePoints;

  return (
    <div>
      <Overview
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
<details>
<summary  className="banner" id="overviewsummary">Civilizations Points</summary>
    <article className='pointables'>
    <table>
      <thead>
    <tr>
    <th>Global</th> 
    <th>{name1}</th>
    <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Buildings</td>
      <td>{totalCiv1BuildingPoints} points</td>
      <td>{totalCiv2BuildingPoints} points</td>
    </tr>
    <tr>
      <td>Units</td>
      <td>{totalCiv1UnitsPoints} points</td>
      <td>{totalCiv2UnitsPoints} points</td>
    </tr>
    <tr>
      <td>Techs</td>
      <td>{totalCiv1TechsPoints} points</td>
      <td>{totalCiv2TechsPoints} points</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1points} points</td>
      <td>{totalCiv2points} points</td>
    </tr>
    </tfoot>
 </table>
    <table>
      <thead>
    <tr>
    <th>Areas</th> 
    <th>{name1}</th>
    <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Military</td>
      <td>{totalCiv1MilitaryPoints}</td>
      <td>{totalCiv2MilitaryPoints}</td>
    </tr>
    {totalCiv1EconomyPoints !== 0 && totalCiv2EconomyPoints !== 0 && (
    <tr> 
      <td>Economy</td>
      <td>{totalCiv1EconomyPoints}</td>
      <td>{totalCiv2EconomyPoints}</td>
    </tr>)}
    <tr>
      <td>Technology</td>
      <td></td><td></td>
    </tr>
    <tr>
      <td>Complementary</td>
      <td></td><td></td>
    </tr>
 </tbody>
 </table>

  <table>
  <thead>
    <tr>
      <th>Military</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Barracks</td>
      <td>{totalCiv1BarracksPoints}</td>
      <td>{totalCiv2BarracksPoints}</td>
    </tr>
    <tr>
      <td>Archery Range</td>
      <td>{totalCiv1ArcheryRangePoints}</td>
      <td>{totalCiv2ArcheryRangePoints}</td>
    </tr>
    <tr>
      <td>Stable</td>
      <td>{totalCiv1StablePoints}</td>
      <td>{totalCiv2StablePoints}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1MilitaryPoints}</td>
      <td>{totalCiv2MilitaryPoints}</td>
    </tr>
  </tfoot>
 </table>
 {totalCiv1EconomyPoints !== 0 && totalCiv2EconomyPoints !== 0 && (
  <table>
  <thead>
    <tr>
      <th>Economy</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Town Center</td>
      <td>{totalCiv1TownCenterPoints}</td>
      <td>{totalCiv2TownCenterPoints}</td>
    </tr>
    <tr>
      <td>Lumber Camp</td>
      <td>{totalCiv1LumberCampPoints}</td>
      <td>{totalCiv2LumberCampPoints}</td>
    </tr>
    <tr>
      <td>Mining Camp</td>
      <td>{totalCiv1MiningCampPoints}</td>
      <td>{totalCiv2MiningCampPoints}</td>
    </tr>
    </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1EconomyPoints}</td>
      <td>{totalCiv2EconomyPoints}</td>
    </tr>
  </tfoot>
 </table>
 )}

  <table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Blacksmith</td>
      <td>{totalCiv1BlacksmithPoints}</td>
      <td>{totalCiv2BlacksmithPoints}</td>
    </tr>
    <tr>
      <td>University</td>
      <td>{totalCiv1UniversityPoints}</td>
      <td>{totalCiv2UniversityPoints}</td>
    </tr>
    <tr>
      <td>Castle</td>
      <td>{totalCiv1CastlePoints}</td>
      <td>{totalCiv2CastlePoints}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1TechnologyPoints}</td>
      <td>{totalCiv2TechnologyPoints}</td>
    </tr>
  </tfoot>
 </table>

  <table>
  <thead>
    <tr>
      <th>Complementary</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Dock</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Monastery</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Siege Workshop</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
 </table>
    </article>
    </details>
    </div>
  );
};

export default CivComparator;