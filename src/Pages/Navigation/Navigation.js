import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'

import { RxDashboard } from 'react-icons/rx';
import { AiOutlineHome} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';

function Navigation() {
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
            <img src='..\Assets\Images\logo.jpg' />
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
    </div>
  )
}

export default Navigation