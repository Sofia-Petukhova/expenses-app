import React, { useState } from "react";
import CostForm from "./CostForm/CostForm";
import Button from "../Button/Button";
import "./NewCost.css";

const NewCost = ({ onAddCost }) => {
  const [isCansel, setIsCansel] = useState(true);
  const handleCansel = () => {
    setIsCansel(true);
  };
  const handleAddNewCost = () => {
    setIsCansel(false);
  };
  const handleSaveCostData = (costData) => {
    const costDataWithId = {
      ...costData,
      id: Math.random().toString(),
    };
    onAddCost(costDataWithId);
    setIsCansel(true);
  };
 
  return (
    <div className="new-cost">
      {isCansel ? (
        <Button
          type="button"
          text="Добавить новый расход"
          onClick={handleAddNewCost}
        />
      ) : (
        <CostForm onSaveCostData={handleSaveCostData} onCancel={handleCansel} />
      )}
    </div>
  );
};

export default NewCost;
