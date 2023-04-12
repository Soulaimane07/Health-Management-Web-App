import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import { FoodCalcules } from './Charts';

function FoodChat(props) {
    ChartJS.register(ArcElement, Tooltip, Legend);

  let fruits = FoodCalcules()?.fruits
  let vegetables = FoodCalcules()?.vegetables
  let meat = FoodCalcules()?.meat
  let bakery = FoodCalcules()?.bakery
  let dairy = FoodCalcules()?.dairy
  let snacks = FoodCalcules()?.snacks
  let drinks = FoodCalcules()?.drinks
  let dishes = FoodCalcules()?.dishes

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
        <Pie
          data={data}
        />
    </div>
  )
}

export default FoodChat