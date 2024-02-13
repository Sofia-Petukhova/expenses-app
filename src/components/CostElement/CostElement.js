import React, { useState } from "react";
import "./CostElement.css";
import CostDate from "./CostDate/CostDate";
import Card from "../Card/Card";

const CostElement = ({ date, description, price }) => {
  const [descriptionName, setdescriptionName] = useState(description);
  const HandleChangeDescription = () => {
    setdescriptionName('lets goooo');
    console.log(descriptionName)
  };
  return (
    <Card className="cost-elem">
      <CostDate date={date} />
      <div className="cost-elem__description">
        <h2>{descriptionName}</h2>
        <div className="cost-elem__price">$ {price}</div>
      </div>
      <button onClick={HandleChangeDescription}>Изменить описание</button>
    </Card>
  );
};

export default CostElement;
