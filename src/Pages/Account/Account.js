import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Account.css'
import { GeneralBtn } from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modals/Modal';


function Account(props) {
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
                    {GeneralBtn("Update", null, "#15E884", "white")}
                </div>
                <div className='btn'>
                    {GeneralBtn("Log out", LogoutClick, "rgb(246, 22, 22)", "white")}
                </div>
            </div>
        </div>

        {modal &&
            // <div className='modal'>
            //     <div className='modalBody'>
            //         <h1> Are you sure! </h1>
            //         <div className='buttons'>
            //             <div className='btn'>
            //                 {GeneralBtn("Yes", LogOut, "rgb(246, 22, 22)", "white")}
            //             </div>
            //             <div className='btn'>
            //                 {GeneralBtn("No", cancelClick, "#15E884", "white")}
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <Modal Cancel={cancelClick} Confirm={LogOut} />
        }
    </div>
  )
}

export default Account