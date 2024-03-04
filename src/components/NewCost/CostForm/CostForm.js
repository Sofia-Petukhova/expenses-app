import React, { useState } from "react";
import "./CostForm.css";
import Button from "../../Button/Button";

const CostForm = ({ onSaveCostData, onCancel }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleAddCost = (event) => {
    event.preventDefault();

    const costData = {
      description: description,
      price: price,
      date: new Date(),
    };

    onSaveCostData(costData);
    setDescription("");
    setPrice("");
    setDate("");
  };

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Описание</label>
          <input
            type="text"
            value={description}
            onChange={handleChangeDescription}
          />
        </div>
        <div className="new-cost__control">
          <label>Цена</label>
          <input
            value={price}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChangePrice}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            value={date}
            type="date"
            min="2024-01-01"
            step="2024-12-31"
            onChange={handleChangeDate}
          />
        </div>
        <div className="new-cost__actions">
          <Button
            type="button"
            text="Добавить расход"
            onClick={handleAddCost}
          />
          <Button type="button" text="Отмена" onClick={onCancel} />
        </div>
      </div>
    </form>
  );
};

export default CostForm;
