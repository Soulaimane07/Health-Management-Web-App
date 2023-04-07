import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './Food.css'
import Table from '../../Components/Table/Table'
import { GetData, ServerLink } from '../../Components/Functions/CRUD'
import {MdClose} from 'react-icons/md'
import { GeneralBtn } from '../../Components/Buttons/Buttons'

function Food() {
    const [option, setOption] = useState("Fruits")

    const options = [
        {
            'title':'Fruits',
        },
        {
            'title':'Légumes',
        },
        {
            'title':'Viandes',
        },
        {
            'title':'Boulangerie',
        },
        {
            'title':'Produit laitier',
        },
        {
            'title':'Snacks',
        },
        {
            'title':'Boissons',
        },
        {
            'title':'Plats',
        },
    ]

    let food = GetData("/food")
    console.log(food);

    const [modal, setModal] = useState(false)
    const [modalBody, setModalBody] = useState({})

    console.log(modalBody);
    const foodModalBody = [
        {
            "title":"Id",
            "value": modalBody?._id
        },
        {
            "title":"Name",
            "value": modalBody?.name
        },
        {
            "title":"Type",
            "value": modalBody?.type
        },
    ]

    const foodModalBody2 = [
        {
            "title":"Calories",
            "value": modalBody?.calories,
        },
        {
            "title":"Carbs",
            "value": modalBody?.carbs,
        },
        {
            "title":"Fat",
            "value": modalBody?.fat,
        },
        {
            "title":"Fiber",
            "value": modalBody?.fiber,
        },
        {
            "title":"Protein",
            "value": modalBody?.protein,
        },
    ]

  return (
    <div className='Food PageBox'>
        <Header title="Food" number={food?.length} button="Create Food" />

        <div className='PageBody'>
            <div className='options'>
                {options.map((item,key)=>(
                    <button key={key} className={`optionBtn ${item.title === option && "btnactive"}`} onClick={()=> setOption(item.title)}> 
                        <h2> {item.title} </h2>
                    </button>
                ))}
            </div>

            <div className='foodBody'>
                {food.map((item,key)=>(
                    <div onClick={()=> setModal(true) & setModalBody(item)} key={key} className='foodItem'>
                        <div className='foodImage'>
                            <img src={`${ServerLink}/${item.image}`} />
                        </div>
                        <h1> {item.name} </h1>
                    </div>
                ))}
            </div>

            {modal &&
                <div className='modal'>
                    <button className='close' onClick={()=> setModal(false)}> <MdClose /> </button>
                    <div className='foodModal'>
                        <Header title={modalBody.name} />
                        <hr className='hr'></hr> 

                        <div className='foodModalBody' style={{display: "flex", alignItems: 'flex-start', justifyContent: 'space-between'}}>
                            <div style={{flex: 1, paddingRight: 30, borderRightColor: "#15e886d1", borderRightWidth: 4}}>
                                <div className='modalImage'>
                                    <img src={`${ServerLink}/${modalBody.image}`} />
                                </div>
                                {foodModalBody?.map((item,key)=>(
                                    <div key={key} className='foodModalRow' style={{marginBottom: 10}}>
                                        <h1 style={{fontWeight: 'bold'}}> {item.title} </h1>
                                        <h1> {item.value} </h1>
                                    </div>
                                ))}
                            </div>
                            <div style={{flex: 1, paddingLeft: 30}}>
                                {foodModalBody2?.map((item,key)=>(
                                    <div key={key} className='foodModalRow' style={{marginBottom: 10}}>
                                        <h1 style={{fontWeight: 'bold'}}> {item.title} </h1>
                                        <h1> {item.value} </h1>
                                    </div>
                                ))}
                                {/* <button className='buttons' style={{width: "100%"}}>
                                    <div className='btn'>
                                    {GeneralBtn("Update", null, "#15E884", "white")}
                                    </div>
                                    <div className='btn'>
                                    {GeneralBtn("Delete", null, "rgb(246, 22, 22)", "white")}
                                    </div>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Food