import { useState, useEffect } from 'react';
import count from './main_count';
import countTotalTechsByBuilding from './total_techs_per_building.js';
import countTotalUnitsByBuilding from './total_units_per_building.js';

const TotalsCount = () => {
  const jsonData = require('../data.json');
  const [totals, setTotals] = useState(null);
  const [totalUpb, setTotalUpb] = useState(null);
  const [totalTpb, setTotalTpb] = useState(null);
  const [isUnitsCounted, setIsUnitsCounted] = useState(false);
  const [isTechsCounted, setIsTechsCounted] = useState(false);

  useEffect(() => {
    const totals = count(jsonData);
    setTotals(totals || {
      totalBuildings: 0,
      totalUnits: 0,
      totalTechs: 0,
    });
  }, []);

  useEffect(() => {
    if (!isUnitsCounted) {
      const totalUpb = countTotalUnitsByBuilding();
      setTotalUpb(totalUpb);
      setIsUnitsCounted(true);
    }
  }, [isUnitsCounted]);

  useEffect(() => {
    if (!isTechsCounted) {
      const totalTpb = countTotalTechsByBuilding();
      setTotalTpb(totalTpb);
      setIsTechsCounted(true);
    }
  }, [isTechsCounted]);

 
  return {
    totals,
    totalUpb,
    totalTpb,
  };
};

export default TotalsCount;