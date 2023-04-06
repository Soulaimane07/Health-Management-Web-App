import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'

import { RxDashboard } from 'react-icons/rx';
import { AiOutlineHome} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

function Navigation(props) {
  const list= [
    {
      "title":"Dashboard",
      "logo": <RxDashboard />,
      "link":"/",
    },
    {
      "title":"Food",
      "logo": <AiOutlineHome />,
      "link":"/food",
    },
    {
      "title":"Workout",
      "logo": <AiOutlineHome />,
      "link":"/Workout",
    },
    {
      "title":"Diets",
      "logo": <AiOutlineHome />,
      "link":"/diets",
    },
    {
      "title":"Users",
      "logo": <FiUsers />,
      "link":"/users",
    }    
  ]

  return (
    <div className='Navigation' >
      <div>
        <div className='logo'>
          <Link to="/">
            <img src='..\Assets\Images\logo.jpg' alt='HM-Logo' />
          </Link>
        </div>
        <div className='pagesList'>
          {list.map((item, key)=>(
            <NavLink key={key} activateclassname='active' to={item.link} className='link'>
              <div className='icon'>
                {item.logo}
              </div>
              <p>{item.title}</p>
            </NavLink>

          ))}
        </div>
      </div>

      <NavLink to="/account" activateclassname='active' className='profileLink'>
          <div className='profileImg'>
              <img src='../assets/images/profiles/4.png' alt='Profile' />
          </div>
          <h1> {props.user?.fname} </h1>
      </NavLink>
    </div>
  )
}

export default Navigation