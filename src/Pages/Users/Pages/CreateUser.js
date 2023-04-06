import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

function CreateUser() {
    const [part, setPart] = useState(0)
    const [userId, setUserId] = useState(null)

  return (
    <div className='Create PageBox'>
        <Header title="Create User" />
        <hr className='hr'></hr> 

        <div className='list'>
            <div className={`listItem ${part === 0 && "active"}`}> Step 1 <span> {part === 1 && <BsFillCheckCircleFill />} </span></div>
            <div className={`listItem ${part === 1 && "active"}`}> Step 2 </div>
        </div>
            
        <div className='CreateBody'>
            {part === 0 
                ?   <Step1 setPart={setPart} setUserId={setUserId} />
                :   <Step2 userId={userId} />
            }
        </div>
    </div>
  )
}

export default CreateUser