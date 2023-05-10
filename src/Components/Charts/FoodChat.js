import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import { FoodCalcules } from './Charts';

function FoodChat(props) {
    ChartJS.register(ArcElement, Tooltip, Legend);

  let fruits = FoodCalcules(props.data)?.fruits
  let vegetables = FoodCalcules(props.data)?.vegetables
  let meat = FoodCalcules(props.data)?.meat
  let bakery = FoodCalcules(props.data)?.bakery
  let dairy = FoodCalcules(props.data)?.dairy
  let snacks = FoodCalcules(props.data)?.snacks
  let drinks = FoodCalcules(props.data)?.drinks
  let dishes = FoodCalcules(props.data)?.dishes

  let data = {
    labels: props.ChartOptions,
    datasets: [
      {
        label: ' ',
        data: [fruits, vegetables, meat, bakery, dairy, snacks, drinks, dishes],
        backgroundColor: [
          '#FF6000',
          '#DDFFBB',
          '#FFE6C7',
          '#FFA559',
          '#27E1C1',
          '#19376D',
          '#8F43EE',
          '#F9DBBB',
        ],
      },
    ],
  };
  
  return (
    <div>
      <Pie data={data} />
    </div>
  )
}

export default FoodChat