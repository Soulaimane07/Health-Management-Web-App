import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Account.css'
import { GeneralBtn } from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modals/Modal';


function Account(props) {
    document.title = "Health Manager - Account"

    const [modal, setModal] = useState(false)

    console.log(props.user);
    const navigate = useNavigate()

    const user = [
        {
            "title":"Email",
            "val": props.user?.email
        },
        {
            "title":"First name",
            "val": props.user?.fname
        },
        {
            "title":"Last name",
            "val": props.user?.lname
        },
        {
            "title":"Password",
            "val": props.user?.pass
        },
    ]

    const LogoutClick = () => {
        setModal(true)
    }
    const cancelClick = () => {
        setModal(false)
    }
    const LogOut = () => {
        localStorage.removeItem('user')
        navigate('/login')
        window.location.reload()
    }

  return (
    <div className='account PageBox'>
        <Header title="Account" />
        <hr className='hr'></hr> 

        <div className='PageBody'>
            <div className='profileImg'>
                <img src='./assets/images/profiles/4.png' alt='Profile' />
            </div>
            {user.map((item,key)=>(
                <div key={key} className='line'>
                    <h1> {item.title} </h1>
                    <h2> {item.val} </h2>
                </div>
            ))}

            <div className='buttons'>
                <div className='btn'>
                    {GeneralBtn("Update", null, "update")}
                </div>
                <div className='btn'>
                    {GeneralBtn("Log out", LogoutClick, "delete")}
                </div>
            </div>
        </div>

        {modal &&
            <Modal Cancel={cancelClick} Confirm={LogOut} />
        }
    </div>
  )
}

export default Account