function countCivBlacksmithBenefits(techs) {
  const jsonData = require('./data.json');

    let counts = {
      barracksBenefits: 0,
      archeryRangesBenefits: 0,
      stableBenefits: 0
    };
  
    const filteredTechs = jsonData.techs.filter(tech => techs.includes(tech.id) && tech.building === "Blacksmith");
    
    filteredTechs.forEach(tech => {
      const benefits = tech.benefits || [];
      benefits.forEach(benefit => {
        if (benefit === 'Barracks') {
          counts.barracksBenefits++;
        } else if (benefit === 'Archery Range') {
          counts.archeryRangesBenefits++;
        } else if (benefit === 'Stable') {
          counts.stableBenefits++;
        }
      });
    });
  
    return counts;
  }
  
  export default countCivBlacksmithBenefits;