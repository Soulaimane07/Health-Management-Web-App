import React from 'react'
import './Modal.css'
import { GeneralBtn } from '../Buttons/Buttons'

function Modal(props) {
  return (
    <div className='modal'>
        <div className='modalBody'>
            <h1> {props.lang.title} </h1>
            <div className='buttons'>
                <div className='btn'>
                    {GeneralBtn(props.lang.yes, props.Confirm, "delete")}
                </div>
                <div className='btn'>
                    {GeneralBtn(props.lang.no, props.Cancel, "update")}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal