import './Home.css'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import FoodChat from '../../Components/Charts/FoodChat'
import { GetData } from '../../Components/Functions/CRUD'
import UsersChart from '../../Components/Charts/UsersChart'

function Home(props) {
  const lang = props.lang
  document.title = `Health Manager - ${lang.dashboard}`

  let food = GetData('/food')

  const Boxes=[
    {
      "title": lang.food,
      "icon":"../assets/images/home/food.png",
      "number": food?.length,
      "numberLabel": "Food",
      "link":"/food"
    },
    {
      "title":lang.workouts,
      "icon":"../assets/images/home/workout.png",
      "number": 0,
      "numberLabel": "Workout",
      "link":"/workout"
    },
    {
      "title": lang.diets,
      "icon":"../assets/images/home/diet.png",
      "number": GetData('/diets')?.length,
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

  let userChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembre', 'October', 'November', 'December']
  let userChartData = [
    {
      label: "Created users",
      data: [0, 10, 50, 80, 100, 100, 250, 250, 200, 200, 200, 210],
      borderColor: '#0bf186b1',
      backgroundColor: '#0bf186b1',
    },
    {
      label: "Active users",
      data: [0, 10, 40, 50, 90, 100, 220, 200, 180, 170, 200, 200],
      borderColor: '#F45050',
      backgroundColor: '#F45050',
    },
  ]

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
          <FoodChat lang={lang} ChartOptions={props.ChartOptions} data={food} />
        </div>
        <div className='chart chart2'>
          <h1> {lang.users} </h1>
          <UsersChart labels={userChartLabels} data={userChartData} lang={lang} />
        </div>
      </div>
    </div>
  )
}

export default Home