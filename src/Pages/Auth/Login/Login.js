import React, { useState } from 'react'
import './Login.css'
import Auth from '../Auth'
import { LoginButton } from '../../../Components/Buttons/Buttons'
import axios from 'axios'
import { ServerLink } from '../../../Components/Functions/CRUD'
import { AlertDanger } from '../../../Components/Alerts/Alerts'
import { useNavigate } from "react-router-dom";

function Login() {
    document.title = "Health Manager - Login"

    const navigate = useNavigate()

    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)

    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const condition = email !== null && pass !== null 

    const Loginfun = () => {
        setLoading(true)
        setMessage('')

        axios.get(`${ServerLink}/users/getByEmail/${email}`)
            .then(res=>(
                pass === res.data?.pass 
                    ? (
                        setLoading(false),
                        console.log(res.data),
                        localStorage.setItem('user', JSON.stringify(res.data)),
                        navigate('/'),
                        window.location.reload()
                    ) : (
                        setLoading(false),
                        setMessage("Email or password is wrong")
                    )
            ))
            .catch(error => {
                console.log(error);
            })
    }


    return (
    <div className='login'>
        
        <div className='loginPage'>
            <div>
                <div className='logo'>
                    <img src='./Assets/Images/Logo.jpg' alt='HM-Logo' />
                </div>
                <h1>Log in your account</h1>
            </div>

            {message !== "" && AlertDanger(message, true)}

            <div style={{marginBottom: 30}}>
                <div className='emailpass'>
                    <input type='email' name='email' placeholder='Email Adress' onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className='emailpass'>
                    <input type='password' name='password' placeholder='Password' onChange={e=> setPass(e.target.value)} />
                </div>
            </div>
            
            {LoginButton("Login", condition, Loginfun, loading)}
        </div>
        <Auth />
    </div>
  )
}

export default Login