import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConditionBtn } from '../../../../Components/Buttons/Buttons'

function Step2(props) {
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
        userId: props.userId,
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

    const navigate = useNavigate()

    const navigateFun = () => {
        navigate('/users')
        window.location.reload()
    }

  return (
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
        {ConditionBtn("Finish", "/usersDetails", userDetails, condittion2, navigateFun)}   
    </>
  )
}

export default Step2