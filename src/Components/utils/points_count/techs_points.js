const data = require('../data.json');

function getTechsPoints(buildingName, techNumbers) {
  let totalPoints = 0;
  for (const techNumber of techNumbers) {
    const tech = data.techs.find(tech => tech.id == techNumber && tech.building == buildingName);

    if (tech && tech.tech_cost) {
      totalPoints += tech.tech_cost;
    }
  }
  return totalPoints;
}

export default getTechsPoints;