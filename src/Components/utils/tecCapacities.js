import countTechsByBuilding from './civ_tech_per_building.js';

const getEcoTechCapacities = (techs) => {

    const buildingsToCheck = ['Monastery', 'Blacksmith', 'University', 'Castle', 'Town Center', 'Mining Camp', 'Lumber Camp', 'Market','Dock','Siege Workshop'];
  const counts = {};
  buildingsToCheck.forEach(building => {

    counts[building] = countTechsByBuilding(techs, building);

  });
  return counts;
};

export default getEcoTechCapacities;