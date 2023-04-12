import './Home.css'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import FoodChat from '../../Components/Charts/FoodChat'
import { GetData } from '../../Components/Functions/CRUD'
import { Bar, Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';;


function Home(props) {
  const lang = props.lang
  document.title = `Health Manager - ${lang.dashboard}`

  const Boxes=[
    {
      "title": lang.food,
      "icon":"../assets/images/home/food.png",
      "number": GetData("/food").length,
      "link":"/food"
    },
    {
      "title":lang.workouts,
      "icon":"../assets/images/home/workout.png",
      "number": 14,
      "link":"/workout"
    },
    {
      "title": lang.diets,
      "icon":"../assets/images/home/diet.png",
      "number": 10,
      "numberLabel": "Diet",
      "link":"/diets"
    },
    {
      "title": lang.users,
      "icon":"../assets/images/home/users.png",
      "number": GetData("/users").length,
      "numberLabel": "User",
      "link":"/users"
    },
  ]



  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: [0, 50, 100, 100, 300, 250, 250],
        borderColor: '#0bf186b1',
        backgroundColor: '#0bf186b1',
      },
    ],
  };


  return (
    <div className='Home PageBox'>
      <Header title={lang.dashboard} />
      
      <div className='boxes'>
       {Boxes?.map((item,key)=>(
        <Link to={item.link} key={key} className='boxe'>
          <div className='boxImage'>
            <img src={item.icon} />
          </div>
          <div>
            <h1> {item.title} </h1>
            <h4> {item.number} {item.numberLabel} </h4>
          </div>
        </Link>
       ))}
      </div>

      <div className='charts'>
        <div className='chart chart1'>
          <h1> {lang.food} </h1>
          <FoodChat lang={lang} ChartOptions={props.ChartOptions} />
        </div>
        <div className='chart chart2'>
          <h1> {lang.users} </h1>
          <Line data={data} />
        </div>
      </div>
    </div>
  )
}

export default Home