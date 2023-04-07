import React from 'react'
import { GeneralBtn } from '../Buttons/Buttons'

function Modal(props) {
  return (
    <div className='modal'>
        <div className='modalBody'>
            <h1> Are you sure! </h1>
            <div className='buttons'>
                <div className='btn'>
                    {GeneralBtn("Yes", props.Confirm, "rgb(246, 22, 22)", "white")}
                </div>
                <div className='btn'>
                    {GeneralBtn("No", props.Cancel, "#15E884", "white")}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal