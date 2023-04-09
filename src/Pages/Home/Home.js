import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import { GetData } from '../../Components/Functions/CRUD'

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
    </div>
  )
}

export default Home