import React, { useState } from 'react'
import { AlertDanger } from '../../../../Components/Alerts/Alerts'
import { ConditionBtn } from '../../../../Components/Buttons/Buttons'

function Step1(props) {
    const lang = props.lang

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
                <label> {lang.email} </label>
                <input type='email' onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className='line'>
                <label> {lang.fname} </label>
                <input type='text' onChange={(e)=> setFname(e.target.value)} />
            </div>
            <div className='line'>
                <label> {lang.lname} </label>
                <input type='text' onChange={(e)=> setLname(e.target.value)} />
            </div>
            <div className='line'>
                <label> {lang.pass} </label>
                <input type='password' onChange={(e)=> setPass(e.target.value)} />
                {pass?.length < 8 && AlertDanger("Password must be more than 8 digits")}
            </div>
        </form>
        {ConditionBtn(lang.next, condittion, create)}
    </>
  )
}

export default Step1