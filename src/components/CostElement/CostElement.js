import "./CostElement.css";
import CostDate from "./CostDate/CostDate";
import Card from "../Card/Card";

const CostElement = ({ date, description, price }) => {
  return (
    <Card className="cost-elem">
      <CostDate date={date} />
      <li className="cost-elem__description">
        <h2>{description}</h2>
        <div className="cost-elem__price">$ {price}</div>
      </li>
    </Card>
  );
};

export default CostElement;
