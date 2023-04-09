import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function Header(props) {
  return (
    <div className='header' style={{marginBottom: "20px"}}>
        <h1 style={{fontSize: "40px", fontWeight: 'bold'}}> 
          {props.title} 
          {(props.number == 0 || props.number) && <span> ( {props.number} ) </span> }
        </h1>
        
        {props.button && 
          <Link to="create" className='HeaderBtn'>
            <AiOutlinePlusCircle size={22} />
            <p> {props.button} </p>
          </Link>
        }
    </div>
  )
}

export default Header