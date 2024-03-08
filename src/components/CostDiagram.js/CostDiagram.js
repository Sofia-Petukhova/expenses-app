import Diagram from '../Diagram/Diagram'

const CostDiagram = ({costs}) => {
  const diagramDataSets = [
    {label: 'Янв', value: 0},
    {label: 'Фев', value: 0},
    {label: 'Мар', value: 0},
    {label: 'Апр', value: 0},
    {label: 'Май', value: 0},
    {label: 'Июн', value: 0},
    {label: 'Июл', value: 0},
    {label: 'Авг', value: 0},
    {label: 'Сен', value: 0},
    {label: 'Окт', value: 0},
    {label: 'Ноя', value: 0},
    {label: 'Дек', value: 0},
  ];

  for (const cost of costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.price;
  }
  return <Diagram dataSets={diagramDataSets}/>
}

export default CostDiagram;