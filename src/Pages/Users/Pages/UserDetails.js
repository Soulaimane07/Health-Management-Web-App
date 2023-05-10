import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GeneralBtn } from '../../../Components/Buttons/Buttons';
import '../../../Components/Buttons/Button.css'
import Modal from '../../../Components/Modals/Modal';
import { DeleteUser, ServerLink } from '../../../Components/Functions/CRUD';
import UsersChart from '../../../Components/Charts/UsersChart';

function UserDetails(props) {
    const buttons = props.buttons
    const lang = props.lang
    
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
            "title":lang?.create.fname,
            "value": user?.fname,
        },
        {
            "title":lang?.create.lname,
            "value": user?.lname,
        },
        {
            "title":lang?.create.email,
            "value": user?.email,
        },
        {
            "title":lang?.create.pass,
            "value": user?.pass,
        },
    ]

    const detaildata = [
        {
            "title":lang?.create.age,
            "value": userDetails?.age,
        },
        {
            "title":lang?.create.gendre,
            "value": userDetails?.sex,
        },
        {
            "title":lang?.create.goal,
            "value": userDetails?.goal,
        },
        {
            "title":lang?.create.activity,
            "value": userDetails?.activity,
        },
        {
            "title":lang?.create.Cweight,
            "value": userDetails?.CWeight,
        },
        {
            "title":lang?.create.Gweight,
            "value": userDetails?.GWeight,
        },
        {
            "title":lang?.create.calories,
            "value": userDetails?.calories,
        },
        {
            "title":lang?.create.steps,
            "value": userDetails?.steps,
        },
        {
            "title":lang?.create.water,
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
        DeleteUser(id)
        navigate('/users')
    }

    let userChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Friday', 'Saturday', 'Sunday']
    const userChartActivity = [
        {
            label: "Activity",
            data: [0, 1, 10, 9, 5, 4, 6, 14],
            borderColor: '#0bf186b1',
            backgroundColor: '#0bf186b1',
        },
    ]
    const userChartCalories = [
        {
            label: "Calories",
            data: [2100, 2000, 2050, 2200, 2100, 2150, 2300, 2200],
            borderColor: '#F45050',
            backgroundColor: '#F45050',
        },
    ]
    const userChartSteps = [
        {
            label: "Steps",
            data: [9000, 7000, 8000, 10000, 10500, 10000, 9000, 10000],
            borderColor: '#F9D949',
            backgroundColor: '#F9D949',
        },
    ]
    const userChartWater = [
        {
            label: "Water",
            data: [150, 40, 130, 200, 20, 0, 100, 400],
            borderColor: '#569DAA',
            backgroundColor: '#569DAA',
        },
    ]



    const [userProgress, setUserProgress] = useState()

    useEffect(()=> {
        axios.get(`${ServerLink}/usersProgress/getByUserId/${user?._id}`)
            .then(res => {
                console.log(res.data);
            })
    }, [])
    

  return (
    <div className='UserDetailsPage'>
        <div className='userData'>
            <div className='profileImg'>
                <img src='../assets/images/profiles/4.png' alt='Profile' />
            </div>

            <h1 className='user'> {user.fname} {user.lname} </h1>
            
            <div style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
                {data.map((item,key)=>(
                    <div key={key} className='row'>
                        <h1> {item.title} </h1>
                        <h2> {item.value}  </h2>
                    </div>
                ))}
            </div>

            <div style={{marginBottom: 30, marginLeft: 30, marginRight: 30}}>
                {detaildata.map((item,key)=>(
                    <div key={key} className='row'>
                        <h1> {item.title} </h1>
                        <h2> {item.value}  </h2>
                    </div>
                ))} 
            </div>
            
            <div className='buttons'>
                <div className='btn'>
                    {GeneralBtn(buttons.update, null, "update")}
                </div>
                <div className='btn'>
                    {GeneralBtn(buttons.delete, Logout, "delete")}
                </div>
            </div>
        </div>

        <div className='userCharts'>
            <div className='userChart'>
                <h1> {user?.fname} Activity </h1>
                <UsersChart labels={userChartLabels} data={userChartActivity} lang={lang} />
            </div>
            <div className='userChart'>
                <h1> {user?.fname} Calories </h1>
                <UsersChart labels={userChartLabels} data={userChartCalories} lang={lang} />
            </div>
            <div className='userChart'>
                <h1> {user?.fname} Steps </h1>
                <UsersChart labels={userChartLabels} data={userChartSteps} lang={lang} />
            </div>
            <div className='userChart'>
                <h1> {user?.fname} Water </h1>
                <UsersChart labels={userChartLabels} data={userChartWater} lang={lang} />
            </div>
        </div>

        {modal && <Modal lang={props.modal} logout={Logout} Confirm={Confirm} Cancel={Cancel} />}
    </div>

  )
}

export default UserDetails