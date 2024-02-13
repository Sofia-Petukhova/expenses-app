import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const HandleChangeDescription = (event) => {
    setDescription(event.target.value)
  };
  const HandleChangePrice = (event) => {
    setPrice(event.target.value)
  };

  const HandleChangeDate = (event) => {
    setDate(event.target.value)
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const costData = {
      description: description,
      price: price,
      date: new Date(date),
    };
    console.log(costData)
    setDescription('');
    setPrice('');
    setDate('');
  };
  return (
    <form onSubmit={HandleSubmit}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Описание</label>
          <input type="text" value={description} onChange={HandleChangeDescription} />
        </div>
        <div className="new-cost__control">
          <label>Цена</label>
          <input value={price}
            type="number"
            min="0.01"
            step="0.01"
            onChange={HandleChangePrice}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input value={date}
            type="date"
            min="2024-01-01"
            step="2024-12-31"
            onChange={HandleChangeDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit" className="new-cost__button">
            Добавить расход
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
