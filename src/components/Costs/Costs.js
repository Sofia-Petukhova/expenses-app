import React, { useState } from "react";
import Card from "../Card/Card";
import CostsFilter from "../CostFilter/CostFilter";
import "./Costs.css";
import CostList from "./CostList/CostList";
import CostDiagram from "../CostDiagram.js/CostDiagram";

const Costs = ({ costs }) => {
  const [selectYear, setSelectYear] = useState(2024);
  const handleSelectYear = (year) => {
    setSelectYear(+year);
  };
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear() === selectYear;
  });

  return (
    <Card className="costs">
      <CostsFilter resultYear={selectYear} OnSelectYear={handleSelectYear} />
      <CostDiagram costs={filteredCosts} />
      <CostList filteredCosts={filteredCosts} />
    </Card>
  );
};

export default Costs;
