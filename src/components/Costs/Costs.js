import Card from "../Card/Card";
import CostElement from "../CostElement/CostElement";
import "./Costs.css"
const Costs = ({costs}) => {
  
  return (
    <Card className="costs">
      <CostElement
        date={costs[0].date}
        description={costs[0].description}
        price={costs[0].price}
      />
      <CostElement
        date={costs[1].date}
        description={costs[1].description}
        price={costs[1].price}
      />
      <CostElement
        date={costs[2].date}
        description={costs[2].description}
        price={costs[2].price}
      />
    </Card>
  );
};

export default Costs;
