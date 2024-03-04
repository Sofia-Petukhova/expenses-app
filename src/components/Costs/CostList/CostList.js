import "./CostList.css";
import CostElement from "../../CostElement/CostElement";

const CostList = ({ filteredCosts }) => {
  if (filteredCosts.length === 0) {
    return <h2 className="cost-list__fallback">Расходов нет</h2>;
  }

  return (
    <ul className="cost-list">
      {filteredCosts.map((cost) => (
        <CostElement
          key={cost.id}
          date={cost.date}
          description={cost.description}
          price={cost.price}
        />
      ))}
    </ul>
  );
};

export default CostList;
