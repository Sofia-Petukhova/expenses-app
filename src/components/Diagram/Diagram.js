import "./Diagram.css";
import DiagramBar from "./DiagramBar/DiagramBar";

const Diagram = ({ diagramCosts, maxValue }) => {
  const datas = diagramCosts.map((cost) => )
  return (
    <div className="diagram">
      {datas.map((data) => (
        <DiagramBar
          key={data.id}
          value={data.value}
          maxValue={maxValue}
          label={data}
        />
      ))}
    </div>
  );
};

export default Diagram;
