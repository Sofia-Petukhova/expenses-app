import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const costs = [
  {
    id: "c1",
    date: new Date(2023, 0, 12),
    description: "Ноутбук",
    price: 300,
  },
  {
    id: "c2",
    date: new Date(2021, 1, 7),
    description: "Телефон",
    price: 500,
  },
  {
    id: "c3",
    date: new Date(2024, 2, 31),
    description: "Квартира",
    price: 20000,
  },
  {
    id: "c4",
    date: new Date(2021, 3, 25),
    description: "Кастрюля",
    price: 200,
  },
  {
    id: "c5",
    date: new Date(2023, 3, 19),
    description: "Сковородка",
    price: 450,
  },
  {
    id: "c6",
    date: new Date(2021, 3, 17),
    description: "Гараж",
    price: 250,
  },
  {
    id: "c7",
    date: new Date(2021, 6, 26),
    description: "Машина",
    price: 700,
  },
  {
    id: "c8",
    date: new Date(2021, 7, 16),
    description: "Костюм",
    price: 1500,
  },
  {
    id: "c9",
    date: new Date(2021, 8, 4),
    description: "Утюг",
    price: 800,
  },
  {
    id: "c10",
    date: new Date(2023, 11, 12),
    description: "Стиральная машина",
    price: 900,
  },
  {
    id: "c11",
    date: new Date(2021, 11, 3),
    description: "Наушники",
    price: 1000,
  },
  {
    id: "c12",
    date: new Date(2021, 11, 21),
    description: "Холодильник",
    price: 3000,
  },
];

const App = () => {
  const [costList, setCostList] = useState(costs);
  const handleAddCost = (cost) => {
    setCostList(previousCosts => {
      return [cost, ...previousCosts]
    });
  };
  return (
    <div>
      <NewCost onAddCost={handleAddCost} />
      <Costs costs={costList} />
    </div>
  );
};

export default App;
