import React, { useState } from "react";
import Card from "../Card/Card";
import CostsFilter from "../CostFilter/CostFilter";
import "./Costs.css";
import CostList from "./CostList/CostList";
//import Diagram from "../Diagram/Diagram";
const Costs = ({ costs }) => {
  const [selectYear, setSelectYear] = useState(2024);
  const handleSelectYear = (year) => {
    setSelectYear(+year);
  }; 
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear() === selectYear;
  });
  //<Diagram diagramCosts={filteredCosts} maxValue={3000}/>
  return (
    <Card className="costs">
      <CostsFilter  resultYear={selectYear} OnSelectYear={handleSelectYear} />
      <CostList filteredCosts={filteredCosts} />
    </Card>
  );
};

export default Costs;
