import React from 'react'
import "./Button.css"
import { Delete } from '../Functions/CRUD'

function Button(props) {
    const DeleteFun = () => {
      Delete(`${props.userid}`)
    }

  return (
    <button className='Button' style={{backgroundColor: props.color}} onClick={()=> DeleteFun()}>{props.title}</button>
  )
}

export default Button