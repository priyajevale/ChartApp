// import React from 'react';
// import ChartBar from './ChartBar';
// import './Chart.css';
// const Chart =(props)=>{
//     const dataPointValues = props.datapoints.map(dataPoint => dataPoint.value);
//     const totalMaximum =Math.max(...dataPointValues);
//     return(
// <div className='chart'>
// {props.datepoints.map((datapoint) =>(
// <ChartBar 
// key={datapoint.label}
// value={datapoint.value}
// maxValue={totalMaximum}
// label={datapoint.label}
// />
// ))}


// </div>



//     );
// }
// export default Chart;
import React from 'react';
import ChartBar from './ChartBar'; // Add this import statement
import './Chart.css';

const Chart = (props) => {
  // Ensure that props.datapoints is an array before using map
  const dataPointValues = Array.isArray(props.datapoints) ? props.datapoints.map(dataPoint => dataPoint.value) : [];
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {Array.isArray(props.datapoints) && props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;