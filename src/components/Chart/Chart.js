import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props){
 
//Tranfrom DataPoint Object to an Array of Numbers
const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

//Will Reveive All 12 Values
const totalMaximum = Math.max(...dataPointValues); 

    return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
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