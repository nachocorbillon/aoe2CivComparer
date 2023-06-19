function countTotalUnitsByBuilding() {
  try {
    const data = require('../data.json');

    const units = data.units || [];
    const buildingsNames = data.buildings || [];
    const unitsByBuilding = {};

    buildingsNames.forEach(buildingname => {
      unitsByBuilding[buildingname.name] = 0;
    });

    units.forEach(unit => {
      const unitBuilding = unit.building;
      if (unitBuilding && unitsByBuilding.hasOwnProperty(unitBuilding)) {         
        unitsByBuilding[unitBuilding]++;
      }
    });

    return unitsByBuilding;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
}

export default countTotalUnitsByBuilding;