function sumCategoryPoints(categoryName, buildingPoints, unitsPoints, techsPoints) {
 
  const categoryPointsSum = buildingPoints.hasOwnProperty(categoryName) ? buildingPoints[categoryName] : 0;

  let unitsPointsSum = 0;
  for (const unitPoint of unitsPoints) {
    if (unitPoint.name === categoryName) {
      unitsPointsSum += unitPoint.points;
    }
  }

  let techsPointsSum = 0;
  for (const techPoint of techsPoints) {
    if (techPoint.name === categoryName) {
      techsPointsSum += techPoint.points;
    }
  }

  return categoryPointsSum + unitsPointsSum + techsPointsSum;
}

export default sumCategoryPoints;