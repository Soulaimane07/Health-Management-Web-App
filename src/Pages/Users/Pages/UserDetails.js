import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../../Components/Buttons/Button';

function UserDetails() {
    const params = useParams()
    const id = params._id

    const [user, setUser] = useState({})
    const [userDetails, setUserDetails] = useState({})

    useEffect(()=> {
        axios.get(`https://health-manager.onrender.com/usersDetails/getByUserId/${id}`)
            .then(res => {
                setUserDetails(res.data)
            })

        axios.get(`https://health-manager.onrender.com/users/getById/${id}`)
            .then(res => {
                setUser(res.data)
            })
    }, [])
    
    const data = [
        {
            "title":"User's First name",
            "value": user?.fname,
        },
        {
            "title":"User's Last name",
            "value": user?.lname,
        },
        {
            "title":"User's Email",
            "value": user?.email,
        },
        {
            "title":"User's password",
            "value": user?.pass,
        },
    ]


    const detaildata = [
        {
            "title":"User's Goal",
            "value": userDetails?.goal,
        },
        {
            "title":"User's Current Weight",
            "value": userDetails?.CWeight,
        },
        {
            "title":"User's Goal Weight",
            "value": userDetails?.GWeight,
        },
        {
            "title":"User's age",
            "value": userDetails?.age,
        },
        {
            "title":"User's sex",
            "value": userDetails?.sex,
        },
        {
            "title":"User's calories",
            "value": userDetails?.calories,
        },
        {
            "title":"User's Steps",
            "value": userDetails?.steps,
        },
        {
            "title":"User's water",
            "value": userDetails?.water,
        },
        {
            "title":"User's activity",
            "value": userDetails?.activity,
        },
    ]

  return (
    <div className='data'>
        <h1 className='user'> {user.fname} {user.lname} </h1>
        {data.map((item,key)=>(
            <div key={key} className='row'>
                <h1> {item.title} </h1>
                <h2> {item.value}  </h2>
            </div>
        ))}

        {detaildata.map((item,key)=>(
            <div key={key} className='row'>
                <h1> {item.title} </h1>
                <h2> {item.value}  </h2>
            </div>
        ))} 
        
        <Button title="Update"/>
        <Button title="Delete" color="#E21818" userid={user._id} />
    </div>

  )
}

export default UserDetails