function countTechsByBuilding(techs, buildingName) {

    const jsonData = require('./data.json');
    const techsData = jsonData.techs;
  
    let count = 0;
  
    techs.forEach(tech => {
      const foundTech = techsData.find(t => t.id === tech);
      if (foundTech && foundTech.building === buildingName) {
        count++;
      }
    });
    return count;
  }
  
  export default countTechsByBuilding;