import React, { useMemo } from 'react';
import sumCategoryPoints from '../utils/points_count/category_points.js';

const Points = ({
  name1,name2,
  civ1BuildingPoints,
  civ2BuildingPoints,
  civ1UnitsPoints,
  civ2UnitsPoints,
  civ1TechsPoints,
  civ2TechsPoints
}) => {

 
// TOTAL POINTS
const totalCiv1BuildingPoints = useMemo(() => {
  let sum = 0;
  for (const value of Object.values(civ1BuildingPoints)) {
    sum += value;
  }
  return sum;
}, [civ1BuildingPoints]);

const totalCiv2BuildingPoints = useMemo(() => {
  let sum = 0;
  for (const value of Object.values(civ2BuildingPoints)) {
    sum += value;
  }
  return sum;
}, [civ2BuildingPoints]);

const totalCiv1UnitsPoints = useMemo(() => {
  let sum = 0;
  for (const { points } of civ1UnitsPoints) {
    if (!isNaN(points)) {
      sum += Number(points);
    }
  }
  return sum;
}, [civ1UnitsPoints]);

const totalCiv2UnitsPoints = useMemo(() => {
  let sum = 0;
  for (const { points } of civ2UnitsPoints) {
    if (!isNaN(points)) {
      sum += Number(points);
    }
  }
  return sum;
}, [civ2UnitsPoints]);

const totalCiv1TechsPoints = useMemo(() => {
  let sum = 0;
  for (const { points } of civ1TechsPoints) {
    sum += points;
  }
  return sum;
}, [civ1TechsPoints]);

const totalCiv2TechsPoints = useMemo(() => {
  let sum = 0;
  for (const { points } of civ2TechsPoints) {
    sum += points;
  }
  return sum;
}, [civ2TechsPoints]);

const totalCiv1points = useMemo(
  () =>
    totalCiv1BuildingPoints + totalCiv1UnitsPoints + totalCiv1TechsPoints,
  [totalCiv1BuildingPoints, totalCiv1UnitsPoints, totalCiv1TechsPoints]
);

const totalCiv2points = useMemo(
  () =>
    totalCiv2BuildingPoints + totalCiv2UnitsPoints + totalCiv2TechsPoints,
  [totalCiv2BuildingPoints, totalCiv2UnitsPoints, totalCiv2TechsPoints]
);

  // MILITARY POINTS
  // civ1 military
  const totalCiv1BarracksPoints = useMemo(
    () => sumCategoryPoints('Barracks', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1ArcheryRangePoints = useMemo(
    () => sumCategoryPoints('Archery Range', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1StablePoints = useMemo(
    () => sumCategoryPoints('Stable', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1MilitaryPoints = useMemo(
    () => totalCiv1BarracksPoints + totalCiv1ArcheryRangePoints + totalCiv1StablePoints,
    [totalCiv1BarracksPoints, totalCiv1ArcheryRangePoints, totalCiv1StablePoints]
  );

  // civ2 military
  const totalCiv2BarracksPoints = useMemo(
    () => sumCategoryPoints('Barracks', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2ArcheryRangePoints = useMemo(
    () => sumCategoryPoints('Archery Range', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2StablePoints = useMemo(
    () => sumCategoryPoints('Stable', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2MilitaryPoints = useMemo(
    () => totalCiv2BarracksPoints + totalCiv2ArcheryRangePoints + totalCiv2StablePoints,
    [totalCiv2BarracksPoints, totalCiv2ArcheryRangePoints, totalCiv2StablePoints]
  );


// ECONOMY POINTS
  // civ1 Economy
  const totalCiv1TownCenterPoints = useMemo(
    () => sumCategoryPoints('Town Center', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Mill', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1LumberCampPoints = useMemo(
    () => sumCategoryPoints('Lumber Camp', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1MiningCampPoints = useMemo(
    () => sumCategoryPoints('Mining Camp', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1EconomyPoints = useMemo(
    () => totalCiv1TownCenterPoints + totalCiv1LumberCampPoints + totalCiv1MiningCampPoints,
    [totalCiv1TownCenterPoints, totalCiv1LumberCampPoints, totalCiv1MiningCampPoints]
  );

  // civ2 Economy
  const totalCiv2TownCenterPoints = useMemo(
    () => sumCategoryPoints('Town Center', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Mill', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2LumberCampPoints = useMemo(
    () => sumCategoryPoints('Lumber Camp', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2MiningCampPoints = useMemo(
    () => sumCategoryPoints('Mining Camp', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2EconomyPoints = useMemo(
    () => totalCiv2TownCenterPoints + totalCiv2LumberCampPoints + totalCiv2MiningCampPoints,
    [totalCiv2TownCenterPoints, totalCiv2LumberCampPoints, totalCiv2MiningCampPoints]
  );

  // TECHNOLOGY POINTS
  // civ1 Technology
  const totalCiv1BlacksmithPoints = useMemo(
    () => sumCategoryPoints('Blacksmith', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1UniversityPoints = useMemo(
    () => sumCategoryPoints('University', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1CastlePoints = useMemo(
    () => sumCategoryPoints('Castle', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  ) +
  useMemo(
    () => sumCategoryPoints('Outpost', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Watch Tower', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Guard Tower', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Keep', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Bombard Tower', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Palisade Wall', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Palisade Gate', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Gate', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Fortified Wall', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1TechnologyPoints = useMemo(
    () => totalCiv1BlacksmithPoints + totalCiv1UniversityPoints + totalCiv1CastlePoints,
    [totalCiv1BlacksmithPoints, totalCiv1UniversityPoints, totalCiv1CastlePoints]
  );

  // civ2 Technology
  const totalCiv2BlacksmithPoints = useMemo(
    () => sumCategoryPoints('Blacksmith', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2UniversityPoints = useMemo(
    () => sumCategoryPoints('University', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );

  const totalCiv2CastlePoints = useMemo(
    () => sumCategoryPoints('Castle', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  ) +
  useMemo(
    () => sumCategoryPoints('Outpost', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Watch Tower', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Guard Tower', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Keep', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Bombard Tower', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Palisade Wall', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Palisade Gate', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Gate', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  )+
  useMemo(
    () => sumCategoryPoints('Fortified Wall', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
    [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
  );


  const totalCiv2TechnologyPoints = useMemo(
    () => totalCiv2BlacksmithPoints + totalCiv2UniversityPoints + totalCiv2CastlePoints,
    [totalCiv2BlacksmithPoints, totalCiv2UniversityPoints, totalCiv2CastlePoints]
  );

    // COMPLEMENTARY POINTS
  // civ1 Complementary
  const totalCiv1DockPoints = useMemo(
    () => sumCategoryPoints('Dock', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1MonasteryPoints = useMemo(
    () => sumCategoryPoints('Monastery', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1SiegeWorkshopPoints = useMemo(
    () => sumCategoryPoints('Siege Workshop', civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints),
    [civ1BuildingPoints, civ1UnitsPoints, civ1TechsPoints]
  );

  const totalCiv1ComplementaryPoints = useMemo(
    () => totalCiv1SiegeWorkshopPoints + totalCiv1MonasteryPoints + totalCiv1DockPoints,
    [totalCiv1SiegeWorkshopPoints, totalCiv1MonasteryPoints, totalCiv1MonasteryPoints]
  );

    // civ2 Complementary
    const totalCiv2DockPoints = useMemo(
        () => sumCategoryPoints('Dock', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
        [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
      );

      const totalCiv2MonasteryPoints = useMemo(
        () => sumCategoryPoints('Monastery', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
        [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
      );

      const totalCiv2SiegeWorkshopPoints = useMemo(
        () => sumCategoryPoints('Siege Workshop', civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints),
        [civ2BuildingPoints, civ2UnitsPoints, civ2TechsPoints]
      );

      const totalCiv2ComplementaryPoints = useMemo(
        () => totalCiv2SiegeWorkshopPoints + totalCiv2MonasteryPoints + totalCiv2DockPoints,
        [totalCiv2SiegeWorkshopPoints, totalCiv2MonasteryPoints, totalCiv2MonasteryPoints]
      );



  return (
<details>
<summary  className="banner" id="overviewsummary">Civilizations Points</summary>
    <article className='pointables'>
    <table>
      <thead>
    <tr>
    <th style={{backgroundColor:'firebrick'}}>&#x1F30D; Global</th>
    <th style={{backgroundColor:'firebrick'}}>{name1}</th>
    <th style={{backgroundColor:'firebrick'}}>{name2}</th>
    </tr>
    </thead>
<tbody>
<tr>
  <td>Buildings</td>
  <td>{totalCiv1BuildingPoints} points</td>
  <td>{totalCiv2BuildingPoints} points</td>
</tr>
<tr>
  <td>Units</td>
  <td>{totalCiv1UnitsPoints} points</td>
  <td>{totalCiv2UnitsPoints} points</td>
</tr>
<tr>
  <td>Techs</td>
  <td>{totalCiv1TechsPoints} points</td>
  <td>{totalCiv2TechsPoints} points</td>
</tr>
    </tbody>
    <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1points} points</td>
      <td>{totalCiv2points} points</td>
    </tr>
    </tfoot>
 </table>
    <table>
      <thead>
    <tr>
    <th style={{backgroundColor:'royalblue'}}>Areas</th>
    <th style={{backgroundColor:'royalblue'}}>{name1}</th>
    <th style={{backgroundColor:'royalblue'}}>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>&#x2694; Military</td>
      <td>{totalCiv1MilitaryPoints} points</td>
      <td>{totalCiv2MilitaryPoints} points</td>
    </tr>
    {totalCiv1EconomyPoints !== 0 && totalCiv2EconomyPoints !== 0 && (
    <tr>
      <td>&#x1F33E; Economy</td>
      <td>{totalCiv1EconomyPoints} points</td>
      <td>{totalCiv2EconomyPoints} points</td>
    </tr>)}
    <tr>
      <td>&#x2692; Technology</td>
      <td>{totalCiv1TechnologyPoints} points</td>
      <td>{totalCiv2TechnologyPoints} points</td>
    </tr>
    <tr>
      <td>&#x1F3F0; Complementary</td>
      <td>{totalCiv1ComplementaryPoints} points</td>
      <td>{totalCiv2ComplementaryPoints} points</td>
    </tr>
 </tbody>
 </table>

  <table>
  <thead>
    <tr>
      <th>Military</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Barracks</td>
      <td>{totalCiv1BarracksPoints} points</td>
      <td>{totalCiv2BarracksPoints} points</td>
    </tr>
    <tr>
      <td>Archery Range</td>
      <td>{totalCiv1ArcheryRangePoints} points</td>
      <td>{totalCiv2ArcheryRangePoints} points</td>
    </tr>
    <tr>
      <td>Stable</td>
      <td>{totalCiv1StablePoints} points</td>
      <td>{totalCiv2StablePoints} points</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1MilitaryPoints} points</td>
      <td>{totalCiv2MilitaryPoints} points</td>
    </tr>
  </tfoot>
 </table>
 {totalCiv1EconomyPoints !== 0 && totalCiv2EconomyPoints !== 0 && (
  <table>
  <thead>
    <tr>
      <th>Economy</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Town Center & Mill</td>
      <td>{totalCiv1TownCenterPoints} points</td>
      <td>{totalCiv2TownCenterPoints} points</td>
    </tr>
    <tr>
      <td>Lumber Camp</td>
      <td>{totalCiv1LumberCampPoints} points</td>
      <td>{totalCiv2LumberCampPoints} points</td>
    </tr>
    <tr>
      <td>Mining Camp</td>
      <td>{totalCiv1MiningCampPoints} points</td>
      <td>{totalCiv2MiningCampPoints} points</td>
    </tr>
    </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1EconomyPoints} points</td>
      <td>{totalCiv2EconomyPoints} points</td>
    </tr>
  </tfoot>
 </table>
 )}

  <table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Blacksmith</td>
      <td>{totalCiv1BlacksmithPoints} points</td>
      <td>{totalCiv2BlacksmithPoints} points</td>
    </tr>
    <tr>
      <td>University</td>
      <td>{totalCiv1UniversityPoints} points</td>
      <td>{totalCiv2UniversityPoints} points</td>
    </tr>
    <tr>
      <td>Castle, Walls & Towers</td>
      <td>{totalCiv1CastlePoints} points</td>
      <td>{totalCiv2CastlePoints} points</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1TechnologyPoints} points</td>
      <td>{totalCiv2TechnologyPoints} points</td>
    </tr>
  </tfoot>
 </table>

  <table>
  <thead>
    <tr>
      <th>Complementary</th>
      <th>{name1}</th>
      <th>{name2}</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Dock</td>
      <td>{totalCiv1DockPoints} points</td>
      <td>{totalCiv2DockPoints} points</td>
    </tr>
    <tr>
      <td>Monastery</td>
      <td>{totalCiv1MonasteryPoints} points</td>
      <td>{totalCiv2MonasteryPoints} points</td>
    </tr>
    <tr>
      <td>Siege Workshop</td>
      <td>{totalCiv1SiegeWorkshopPoints} points</td>
      <td>{totalCiv2SiegeWorkshopPoints} points</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total Points</td>
      <td>{totalCiv1ComplementaryPoints} points</td>
      <td>{totalCiv2ComplementaryPoints} points</td>
    </tr>
  </tfoot>
 </table>
    </article>
    </details>
  );
};

export default Points;