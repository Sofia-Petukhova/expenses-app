import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    { date: new Date(2024, 3, 12), description: "Ноутбук", price: 799.99 },
    { date: new Date(2024, 11, 7), description: "Телефон", price: 299.99 },
    { date: new Date(2024, 5, 31), description: "Ипотека", price: 279.99 },
  ];
  return (
    <div>
      <NewCost/>
     <Costs costs={costs}/>
    </div>
  );
};

export default App;
