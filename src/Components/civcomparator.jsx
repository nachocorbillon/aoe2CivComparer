import React, { useMemo } from 'react';
import getBuildingName from './utils/building_name.js';
import getEcoTechCapacities from './utils/tecCapacities.js'
import getMilitary from './utils/milCapacities.js'
import countBlacksmithBenefits from './utils/totals_count/blacksmith.js'
import countCivBlacksmithBenefits from './utils/civBlacksmith.js'
import Overview from './overview/overview.jsx';
import TotalsCount from './utils/totals_count/totals_count.js';
import getBuildingPoints from './utils/points_count/buildings_points.js';
import getUnitsPoints from './utils/points_count/units_points.js';
import getTechsPoints from './utils/points_count/techs_points.js';
import Points from './points/points.jsx';
import CivsShowcase from './civsShowcase.jsx';


const CivComparator = ({ civ1, civ2 }) => {
  const totalsCount = TotalsCount();
  const totalBlacksmith = countBlacksmithBenefits();
  const name1 = civ1.alias;
  const name2 = civ2.alias;
  const flag1= civ1.flag_palette;
  const flag2= civ2.flag_palette;

  const units1 = civ1.tree[0];
  const buildings1 = civ1.tree[1];
  const techs1 = civ1.tree[2];
  const etcCiv1 = getEcoTechCapacities(techs1);
  const milCiv1 = getMilitary(units1);
  const civ1Blacksmith = countCivBlacksmithBenefits(techs1);


  const units2 = civ2.tree[0];
  const buildings2 = civ2.tree[1];
  const techs2 = civ2.tree[2];
  const etcCiv2 = getEcoTechCapacities(techs2);
  const milCiv2 = getMilitary(units2);
  const civ2Blacksmith = countCivBlacksmithBenefits(techs2);

   const civ1BuildingPoints = getBuildingPoints(buildings1);
   const civ2BuildingPoints = getBuildingPoints(buildings2);
   
   const civ1UnitsPoints = buildings1.map(buildingId => {
    const buildingName = getBuildingName(buildingId);
    return {
      name: buildingName,
      points: getUnitsPoints(buildingName, units1),
    };
  });
  
  const civ2UnitsPoints = buildings2.map(buildingId => {
    const buildingName = getBuildingName(buildingId);
    return {
      name: buildingName,
      points: getUnitsPoints(buildingName, units2),
    };
  });
 
  const civ1TechsPoints = buildings1.map(buildingId => {
    const buildingName = getBuildingName(buildingId);
    return {
      name: buildingName,
      points: getTechsPoints(buildingName, techs1),
    };
  });
  
  const civ2TechsPoints = buildings2.map(buildingId => {
    const buildingName = getBuildingName(buildingId);
    return {
      name: buildingName,
      points: getTechsPoints(buildingName, techs2),
    };
  });



  return (
    <div>

          <CivsShowcase name1={name1} flag1={flag1} civ1total={civ1BuildingPoints+civ1UnitsPoints+civ1TechsPoints} name2={name2} flag2={flag2} civ2total={civ2BuildingPoints+civ2UnitsPoints+civ2TechsPoints} />

<Points
        name1={name1}
        name2={name2}
        civ1BuildingPoints={civ1BuildingPoints}
        civ2BuildingPoints={civ2BuildingPoints}
        civ1UnitsPoints={civ1UnitsPoints}
        civ2UnitsPoints={civ2UnitsPoints}
        civ1TechsPoints={civ1TechsPoints}
        civ2TechsPoints={civ2TechsPoints}
      />
      <Overview
        totalsCount={totalsCount}
        totalBlacksmith={totalBlacksmith}
        name1={name1}
        name2={name2}
        units1={units1}
        buildings1={buildings1}
        techs1={techs1}
        etcCiv1={etcCiv1}
        milCiv1={milCiv1}
        civ1Blacksmith={civ1Blacksmith}
        units2={units2}
        buildings2={buildings2}
        techs2={techs2}
        etcCiv2={etcCiv2}
        milCiv2={milCiv2}
        civ2Blacksmith={civ2Blacksmith}
      />

    </div>
  );
};

export default CivComparator;