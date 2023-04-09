import React, { useState } from 'react'
import { AlertDanger } from '../../../../Components/Alerts/Alerts'
import { CreateBtn } from '../../../../Components/Buttons/Buttons'

function Step1(props) {
    const [email, setEmail] = useState(null)
    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [pass, setPass] = useState(null)

    const user = {
        email: email,
        fname: fname,
        lname: lname,
        pass: pass
    }
    
    const create = (id) => {
        props.setPart(1)
        props.setUserId(id)
    }

    const condittion = email !== null && fname !== null && lname !== null && pass?.length > 7

  return (
    <>
        <form>
            <div className='line'>
                <label> Email </label>
                <input type='email' onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className='line'>
                <label> First Name </label>
                <input type='text' onChange={(e)=> setFname(e.target.value)} />
            </div>
            <div className='line'>
                <label> Last name </label>
                <input type='text' onChange={(e)=> setLname(e.target.value)} />
            </div>
            <div className='line'>
                <label> Password </label>
                <input type='password' onChange={(e)=> setPass(e.target.value)} />
                {pass?.length < 8 && AlertDanger("Password must be more than 8 digits")}
            </div>
        </form>
        {CreateBtn("Next", condittion, create)}
    </>
  )
}

export default Step1