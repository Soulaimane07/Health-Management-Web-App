import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
  
function UsersChart(props) {
  const lang = props.lang

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

    const labels = props.labels;

    const data = {
      labels,
      datasets: props.data
    };
    
  return (
    <div>
        <Line data={data} />
    </div>
  )
}

export default UsersChart