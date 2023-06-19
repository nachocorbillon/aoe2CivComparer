import countUnitsByBuilding from './civ_unit_per_building.js';

const getMilitary = (units) => {

    const buildingsToCheck = ['Barracks', 'Archery Range', 'Stable', 'Castle', 'Dock', 'Siege Workshop'];
  const counts = {};
  buildingsToCheck.forEach(building => {

     counts[building] = countUnitsByBuilding(units, building);

  });
   return counts;
};

export default getMilitary;