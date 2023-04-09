import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

function CreateUser(props) {
    const lang = props.lang
    document.title = `Health Manager - ${lang.title}`


    const [part, setPart] = useState(0)
    const [userId, setUserId] = useState(null)

  return (
    <div className='Create PageBox'>
        <Header title={lang.title} />
        <hr className='hr'></hr> 

        <div className='list'>
            <div className={`listItem ${part === 0 && "active"}`}> {lang.step1} <span> {part === 1 && <BsFillCheckCircleFill />} </span></div>
            <div className={`listItem ${part === 1 && "active"}`}> {lang.step2} </div>
        </div>
            
        <div className='CreateBody'>
            {part === 0 
                ?   <Step1 lang={lang} setPart={setPart} setUserId={setUserId} />
                :   <Step2 userId={userId} />
            }
        </div>
    </div>
  )
}

export default CreateUser