import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'

import { RxDashboard } from 'react-icons/rx';
import { AiOutlineHome} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { useState } from 'react';

import {MdClose} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'

function Navigation(props) {
  const [nav, setNav] = useState(false)
  const lang = props.lang

  const list= [
    {
      "title": lang.dashboard,
      "logo": <RxDashboard />,
      "link":"/",
    },
    {
      "title": lang.food,
      "logo": <AiOutlineHome />,
      "link":"/food",
    },
    {
      "title": lang.workouts,
      "logo": <AiOutlineHome />,
      "link":"/Workout",
    },
    {
      "title": lang.diets,
      "logo": <AiOutlineHome />,
      "link":"/diets",
    },
    {
      "title": lang.users,
      "logo": <FiUsers />,
      "link":"/users",
    }    
  ]

  const x = window.innerWidth

  return (
    <>
    {(x > 1000 || nav) && (
      <div className='Navigation'>
        <div>
          <div className='close'>
            <button onClick={()=> setNav(false)}> <MdClose /> </button>
          </div>
          <div className='logo'>
            <Link onClick={()=> setNav(false)} to="/">
              <img src='..\Assets\Images\logo.jpg' alt='HM-Logo' />
            </Link>
          </div>
          <div className='pagesList'>
            {list.map((item, key)=>(
              <NavLink onClick={()=> setNav(false)} key={key} activateclassname='active' to={item.link} className='link'>
                <div className='icon'>
                  {item.logo}
                </div>
                <p>{item.title}</p>
              </NavLink>

            ))}
          </div>
        </div>

        <NavLink  onClick={()=> setNav(false)} to="/account" activateclassname='active' className='profileLink'>
            <div className='profileImg'>
                <img src='../assets/images/profiles/4.png' alt='Profile' />
            </div>
            <h1> {props.user?.fname} </h1>
        </NavLink>
      </div>
    )}
    {(x < 1000 && !nav) &&
      <div className='NavigationM'>
        <button onClick={()=> setNav(true)} className='bars'>
          <FaBars />
        </button>
      </div>
    }
    </>
  )
}

export default Navigation