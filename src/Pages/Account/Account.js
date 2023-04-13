import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Account.css'
import { ConditionBtn, GeneralBtn } from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modals/Modal';
import Languages from '../../language/Language.json'

function Account(props) {
    const lang = props.lang 

    document.title = "Health Manager - Account"

    const [logOut, setlogOut] = useState(false)
    const [update, setUpdate] = useState(false)

    console.log(props.user);
    const navigate = useNavigate()

    const user = [
        {
            "title": lang.users.create.email,
            "val": props.user?.email
        },
        {
            "title":lang.users.create.fname,
            "val": props.user?.fname
        },
        {
            "title":lang.users.create.lname,
            "val": props.user?.lname
        },
        {
            "title":lang.users.create.pass,
            "val": props.user?.pass
        },
        {
            "title":lang.users.create.lang,
            "val": props.account
        },
    ]


    const UpdateFun = () => {
        setUpdate(true)
    }

    const Update = () => {
        localStorage.setItem("HM-Account", JSON.stringify(newLang))
        console.log("==> Language is updated !!");
        window.location.reload()
    }

    const LogoutClick = () => {
        setlogOut(true)
    }
    const cancelClick = () => {
        setlogOut(false)
    }
    const LogOut = () => {
        localStorage.removeItem('user')
        navigate('/login')
        window.location.reload()
    }

    const [newLang, setNewLang] = useState(null)
    const condition = newLang !== null

    console.log(newLang);

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
                    {GeneralBtn(lang.buttons.update, UpdateFun, "update")}
                </div>
                <div className='btn'>
                    {GeneralBtn(lang.buttons.delete, LogoutClick, "delete")}
                </div>
            </div>
        </div>

        {logOut &&
            <Modal lang={lang.modal} Cancel={cancelClick} Confirm={LogOut} />
        }

        {update &&
            <div className='modal updateModal'>
                <div className='modalBody'>
                    <h1> Update Account </h1>
                    <div className='modalForm'>
                        <div className='linee'>
                            <h2> Language </h2>
                            <select onChange={(e)=> setNewLang(e.target.value)}>
                                <option value={Languages.English.sub}> {Languages.English.title} </option>
                                <option value={Languages.French.sub}> {Languages.French.title} </option>
                                <option value={Languages.Arabic.sub}> {Languages.Arabic.title} </option>
                            </select>
                        </div>
                    </div>  
                    {ConditionBtn("Update", condition, Update)}
                </div>
            </div>
        }
    </div>
  )
}

export default Account