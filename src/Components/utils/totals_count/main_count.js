function count() {
  try {
    const jsonData = require('../data.json');

    const totalBuildings = jsonData.buildings ? jsonData.buildings.length : 0;
    const totalUnits = jsonData.units ? jsonData.units.length : 0;
    const totalTechs = jsonData.techs ? jsonData.techs.length : 0;

    return {
      totalBuildings,
      totalUnits,
      totalTechs,
    };
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    console.error('Error details:', error.message, error.stack);
    return {
      totalBuildings: 0,
      totalUnits: 0,
      totalTechs: 0,
    };
  }
}

export default count;