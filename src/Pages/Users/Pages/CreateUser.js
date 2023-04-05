import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import { CreateBtn } from '../../../Components/Buttons/Buttons'
import { AlertDanger } from '../../../Components/Alerts/Alerts'

import {BsFillCheckCircleFill} from 'react-icons/bs'

function CreateUser() {
    const [part, setPart] = useState(0)
    
    
    
    /* ********* User *********** */
    
    const [userId, setUserId] = useState(null)
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
        setPart(1)
        setUserId(id)
    }

    const condittion = email !== null && fname !== null && lname !== null && pass?.length > 7



    /*** User Details ***/

    const goals = [
        {
            "title":"",
        },
        {
            "title":"Gain weight",
        },
        {
            "title":"Maintain weight",
        },
        {
            "title":"Lose weight",
        }
    ]

    const [goal, setGoal] = useState(null)
    const [sex, setSex] = useState(null)
    const [age, setAge] = useState(null)
    const [heightX, setHeightX] = useState(null)
    const [heightY, setHeightY] = useState(null)
    const [activity, setActivity] = useState(null)
    const [cweight, setCweight] = useState(null)
    const [gweight, setGweight] = useState(null)
    
    const activities = [
        {
            "title":"",
        },
        {
            "title":"Sedentaire",
        },
        {
            "title":"Légèrement actif",
        },
        {
            "title":"Modérément actif",
        },
        {
            "title":"Très actif",
        }
    ]

    const userDetails = {
        userId: userId,
        goal: goal,
        sex: sex,
        system: "eu",
        age: Number(age),
        height: {
            X: Number(heightX),
            Y: Number(heightY),
        },
        CWeight: Number(cweight),
        GWeight: Number(gweight),
        activity: activity,

    }
    const condittion2 = goal !== null && sex !== null && age !== null && heightX !== null && heightY !== null && activity !== null && cweight !== null && gweight !== null

  return (
    <div className='Create PageBox'>
        <Header title="Create User" />
        <hr className='hr'></hr> 

        <div className='list'>
            <div className={`listItem ${part == 0 && "active"}`}> Step 1 <span> {part == 1 && <BsFillCheckCircleFill />} </span></div>
            <div className={`listItem ${part == 1 && "active"}`}> Step 2 </div>
        </div>
            
        <div className='CreateBody'>
            {part === 0 
                ?
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
                        {CreateBtn("Next", "/users", user, condittion, create, setUserId)}
                    </>
                :   
                    <>
                        <form>
                            <div className='line'>
                                <label> Goal </label>
                                <select onChange={(e)=> setGoal(e.target.value)}>
                                    {goals.map((item,key)=>(
                                        <option key={key} value={item.title}> {item.title} </option>
                                    ))}
                                </select>
                            </div>
                            <div className='line'>
                                <label> Sexe </label>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <input type='radio' name="sexe" value={"Female"} onChange={(e)=> setSex(e.target.value)} /> 
                                    <h2 style={{ marginLeft: "10px" }}> Female </h2>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <input type='radio' name="sexe" value={"Male"} onChange={(e)=> setSex(e.target.value)} />
                                    <h2 style={{ marginLeft: "10px" }}> Male </h2>
                                </div>
                            </div>
                            <div className='line'>
                                <label> Age </label>
                                <input type='number' onChange={(e)=> setAge(e.target.value)} />
                            </div>
                            <div className='line'>
                                <label> Height </label>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>

                                    <input type='number' style={{width: "45%"}} onChange={(e)=> setHeightX(e.target.value)} />
                                    <input type='number' style={{width: "45%"}} onChange={(e)=> setHeightY(e.target.value)} />
                                </div>
                            </div>
                            <div className='line'>
                                <label> Current Weight </label>
                                <input type='number' onChange={(e)=> setGweight(e.target.value)} />
                            </div>
                            <div className='line'>
                                <label> Goal Weight </label>
                                <input type='number' onChange={(e)=> setCweight(e.target.value)} />
                            </div>
                            <div className='line'>
                                <label> Activity </label>
                                <select onChange={(e)=> setActivity(e.target.value)}>
                                    {activities.map((item,key)=>(
                                        <option key={key}  value={item.title}> {item.title} </option>
                                    ))}
                                </select>
                            </div>
                        </form>
                        {CreateBtn("Finish", "/usersDetails", userDetails, condittion2)}   
                    </>
            }
        </div>
    </div>
  )
}

export default CreateUser