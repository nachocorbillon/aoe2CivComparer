function countUnitsByBuilding(units, buildingName) {

    const jsonData = require('./data.json');
    const unitsData = jsonData.units;
  
    let count = 0;
  
    units.forEach(unit => {
      const foundunit = unitsData.find(t => t.id === unit);
      if (foundunit && foundunit.building === buildingName) {
        count++;
      }
    });
    return count;
  }
  
  export default countUnitsByBuilding;