function countTotalTechsByBuilding() {
  try {
    const data = require('../data.json');
    const techs = data.techs || [];
    const buildings = data.buildings || [];
    const techsByBuilding = {};

    buildings.forEach(building => {
      techsByBuilding[building.name] = 0;
    });

    techs.forEach(unit => {
      const building = unit.building;
      if (building && techsByBuilding.hasOwnProperty(building)) {
        techsByBuilding[building]++;
      }
    });
    

    return techsByBuilding;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
}

export default countTotalTechsByBuilding;