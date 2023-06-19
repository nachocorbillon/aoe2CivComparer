const data = require('../data.json'); 

function getBuildingsPoints(buildings) {
  const buildingPoints = {};
  const buildingIds = Array.from(buildings); 
  for (const buildingId of buildingIds) {
    const buildingData = data.buildings.find(building => building.id === buildingId);
    if (buildingData) {
      buildingPoints[buildingData.name] = buildingData.tech_cost;
    }
  }
  return buildingPoints;
}

export default getBuildingsPoints;