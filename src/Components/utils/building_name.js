const data = require('./data.json');

function getBuildingName(buildingId) {
  const buildingData = data.buildings.find(building => building.id === buildingId);
  return buildingData ? buildingData.name : null;
}

export default getBuildingName;