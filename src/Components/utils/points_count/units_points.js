const data = require('../data.json');

function getUnitsPoints(buildingName, unitNumbers) {
  let totalPoints = 0;
  for (const unitNumber of unitNumbers) {
    const unit = data.units.find(unit => unit.id == unitNumber && unit.building == buildingName);

    if (unit && unit.tech_cost) {
      totalPoints += unit.tech_cost;
    }
  }
  return totalPoints;
}

export default getUnitsPoints;