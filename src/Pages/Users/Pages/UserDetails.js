import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GeneralBtn } from '../../../Components/Buttons/Buttons';
import '../../../Components/Buttons/Button.css'
import Modal from '../../../Components/Modals/Modal';
import { Delete } from '../../../Components/Functions/CRUD';

function UserDetails() {
    
    const [modal, setModal] = useState(false)
    
    const params = useParams()
    const id = params._id

    document.title = `Health Manager - User ${id}`

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
            "title":"First name",
            "value": user?.fname,
        },
        {
            "title":"Last name",
            "value": user?.lname,
        },
        {
            "title":"Email",
            "value": user?.email,
        },
        {
            "title":"password",
            "value": user?.pass,
        },
    ]

    const detaildata = [
        {
            "title":"Age",
            "value": userDetails?.age,
        },
        {
            "title":"Gendre",
            "value": userDetails?.sex,
        },
        {
            "title":"Goal",
            "value": userDetails?.goal,
        },
        {
            "title":"activity",
            "value": userDetails?.activity,
        },
        {
            "title":"Current Weight",
            "value": userDetails?.CWeight,
        },
        {
            "title":"Goal Weight",
            "value": userDetails?.GWeight,
        },
        {
            "title":"calories",
            "value": userDetails?.calories,
        },
        {
            "title":"Steps",
            "value": userDetails?.steps,
        },
        {
            "title":"water",
            "value": userDetails?.water,
        },
    ]

    const Logout = () => {
        setModal(true)
    }

    const Cancel = () => {
        setModal(false)
    }

    const navigate = useNavigate()
    
    const Confirm = () => {
        Delete(id)
        navigate('/users')

    }

  return (
    <div className='data'>
        <div className='profileImg'>
            <img src='../assets/images/profiles/4.png' alt='Profile' />
        </div>

        <h1 className='user'> {user.fname} {user.lname} </h1>
        
        <div style={{marginBottom: 40, marginLeft: 30, marginRight: 30}}>
            {data.map((item,key)=>(
                <div key={key} className='row'>
                    <h1> {item.title} </h1>
                    <h2> {item.value}  </h2>
                </div>
            ))}
        </div>

        <div style={{marginBottom: 40, marginLeft: 30, marginRight: 30}}>
            {detaildata.map((item,key)=>(
                <div key={key} className='row'>
                    <h1> {item.title} </h1>
                    <h2> {item.value}  </h2>
                </div>
            ))} 
        </div>
        
        <div className='buttons' style={{marginBottom: 20}}>
            <div className='btn'>
                {GeneralBtn("Update", null, "update")}
            </div>
            <div className='btn'>
                {GeneralBtn("Delete", Logout, "delete")}
            </div>
        </div>

        {modal && <Modal logout={Logout} Confirm={Confirm} Cancel={Cancel} />}
    </div>

  )
}

export default UserDetails