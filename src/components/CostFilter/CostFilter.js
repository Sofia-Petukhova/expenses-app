import "./CostFilter.css";

const CostsFilter = ({OnSelectYear, resultYear}) => {
  
  const handleYearChange = (event) => {
    OnSelectYear(event.target.value);
  };
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={resultYear} onChange={handleYearChange}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;

