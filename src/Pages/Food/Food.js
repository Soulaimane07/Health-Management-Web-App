import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Food.css'
import { Delete, GetData, ServerLink } from '../../Components/Functions/CRUD'
import {MdClose} from 'react-icons/md'
import { GeneralBtn } from '../../Components/Buttons/Buttons'
import Modal from '../../Components/Modals/Modal'
import Update from '../../Components/Modals/Update'

function Food(props) {
    const lang = props.lang
    document.title = `Health Managaer - ${lang.title}`

    const [option, setOption] = useState("all")

    const options = props.options

    let food = GetData("/food")
    console.log(food);

    const [modal, setModal] = useState(false)
    const [modalBody, setModalBody] = useState({})

    const foodModalBody = [
        {
            "title": lang.modal.id,
            "value": modalBody?._id
        },
        {
            "title": lang.modal.name,
            "value": modalBody?.name
        },
        {
            "title": lang.modal.type,
            "value": modalBody?.type
        },
    ]

    const foodModalBody2 = [
        {
            "title": lang.modal.calories,
            "value": modalBody?.calories,
        },
        {
            "title": lang.modal.carbs,
            "value": modalBody?.carbs,
        },
        {
            "title": lang.modal.fat,
            "value": modalBody?.fat,
        },
        {
            "title": lang.modal.fiber,
            "value": modalBody?.fiber,
        },
        {
            "title": lang.modal.protein,
            "value": modalBody?.protein,
        },
    ]

    // food = [
    //     {
    //         "id": 2,
    //         "name":"Pomme",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/apple.png",
    //         "calories": 52,
    //         "carbs": 12,
    //         "protein": 0.3,
    //         "fat": 0.3,
    //         "fiber": 2.4
    //     },
    //     {
    //         "id": 3,
    //         "name":"Avocat",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/avocado.png",
    //         "calories": 167,
    //         "carbs": 4.7,
    //         "protein": 2.1,
    //         "fat": 16.4,
    //         "fiber": 6.7
    //     },
    //     {
    //         "id": 4,
    //         "name":"Pain blanc",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/baguette.png",
    //         "calories": 265,
    //         "carbs": 49.1,
    //         "protein": 9.2,
    //         "fat": 3.2,
    //         "fiber": 2.7
    //     },
    //     {
    //         "id": 5,
    //         "name":"Amande",
    //         "type":"Viandes",
    //         "image":"../Assets/Images/food/amande.png",
    //         "calories": 620,
    //         "carbs": 17,
    //         "protein": 20,
    //         "fat": 0.4,
    //         "fiber": 12
    //     },
    //     {
    //         "id": 6,
    //         "name":"Avoine",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/avoine.png",
    //         "calories": 389,
    //         "carbs": 66.3,
    //         "protein": 16.9,
    //         "fat": 6.9,
    //         "fiber": 1.7
    //     },
    //     {
    //         "id": 7,
    //         "name":"Chocolat au lait",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/barre-de-chocolat.png",
    //         "calories": 535,
    //         "carbs": 59.4,
    //         "protein": 7.6,
    //         "fat": 29.7,
    //         "fiber": 3.4
    //     },
    //     {
    //         "id": 8,
    //         "name":"Cookies",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/biscuits.png",
    //         "calories": 474,
    //         "carbs": 63.9,
    //         "protein": 5.1,
    //         "fat": 23.3,
    //         "fiber": 6
    //     },
    //     {
    //         "id": 9,
    //         "name":"Carrot",
    //         "type":"Viandes",
    //         "image":"../Assets/Images/food/carrot.png",
    //         "calories": 33,
    //         "carbs": 6.7,
    //         "protein": 0.8,
    //         "fat": 0.3,
    //         "fiber": 3
    //     },
    //     {
    //         "id": 10,
    //         "name":"Chou",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/chou.png",
    //         "calories": 22,
    //         "carbs": 2.8,
    //         "protein": 2.8,
    //         "fat": 0,
    //         "fiber": 3.4
    //     },
    //     {
    //         "id": 11,
    //         "name":"Chou-Fleur",
    //         "type":"Légumes",
    //         "image":"../Assets/Images/food/chou-fleur.png",
    //         "calories": 24,
    //         "carbs": 3.5,
    //         "protein": 2.4,
    //         "fat": 0,
    //         "fiber": 2.5
    //     },
    //     {
    //         "id": 12,
    //         "name":"Couscous aux legumes",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/couscous.png",
    //         "calories": 114,
    //         "carbs": 18,
    //         "protein": 4.32,
    //         "fat": 2.25,
    //         "fiber": 2.8
    //     },
    //     {
    //         "id": 13,
    //         "name":"Crevette",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/crevette.png",
    //         "calories": 119,
    //         "carbs": 1.5,
    //         "protein": 22.8,
    //         "fat": 1.7,
    //         "fiber": 0
    //     },
    //     {
    //         "id": 14,
    //         "name":"Cake",
    //         "type":"Légumes",
    //         "image":"../Assets/Images/food/cup-cake.png",
    //         "calories": 371,
    //         "carbs": 53.4,
    //         "protein": 5.3,
    //         "fat": 15.1,
    //         "fiber": 3.7
    //     },
    //     {
    //         "id": 15,
    //         "name":"Jus d'orange",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/jus-dorange.png",
    //         "calories": 5.7,
    //         "carbs": 10.4,
    //         "protein": 0.7,
    //         "fat": 0.2,
    //         "fiber": 0.2
    //     },
    //     {
    //         "id": 16,
    //         "name":"Noix",
    //         "type":"Légumes",
    //         "image":"../Assets/Images/food/noix.png",
    //         "calories": 677,
    //         "carbs": 14.3,
    //         "protein": 15,
    //         "fat": 62.2,
    //         "fiber": 7
    //     },
    //     {
    //         "id": 17,
    //         "name":"Oeuf",
    //         "type":"Fruits",
    //         "image":"../Assets/Images/food/oeuf.png",
    //         "calories": 155,
    //         "carbs": 1.1,
    //         "protein": 12.6,
    //         "fat": 10.6,
    //         "fiber": 0
    //     },
    // ]

    const [DeleteModal, setDeleteModal] = useState(false)
    const OpenModal = () => {
        setDeleteModal(true)
    }
    const CancelModal = () => {
        setDeleteModal(false)
    }
    const fun = () => {
        window.location.reload()
    }
    const DeleteFun = () => {
        Delete("/food/", modalBody._id, fun)
    }

    const [updateModal, setUpdateModal] = useState(false)
    const UpdateModal = () => {
        setModal(false)
        setUpdateModal(true)
    }

  return (
    <div className='Food PageBox'>
        <Header title={lang.title} number={food?.length} button={lang.create.title} />

        <div className='PageBody'>
            <div className='options'>
                {options.map((item,key)=>(
                    <button key={key} className={`optionBtn ${item.val === option && "btnactive"}`} onClick={()=> setOption(item.val)}> 
                        <h2> {item.title} </h2>
                    </button>
                ))}
            </div>

            <div className='foodBody'>
                {food?.map((item,key)=>(
                    ((item.type)?.toLowerCase() === option || option === "all") &&
                        <div onClick={()=> setModal(true) & setModalBody(item)} key={key} className='foodItem'>
                            <div className='foodImage'>
                                <img src={`${ServerLink}/${item.image}`} />
                                {/* <img src={`${item.image}`} /> */}
                            </div>
                            <h1> {item.name} </h1>
                        </div>
                ))}
            </div>

            {modal &&
            <>
                <div className='modal'>
                    <button className='close' onClick={()=> setModal(false)}> <MdClose /> </button>
                    <div className='foodModal'>
                        <Header title={modalBody.name} />
                        <hr className='hr'></hr> 

                        <div className='foodModalBody'>
                            <div className='Content'>
                                <div className='modalImage'>
                                    <img src={`${ServerLink}/${modalBody.image}`} />
                                    {/* <img src={`${modalBody.image}`} /> */}
                                </div>
                                {foodModalBody?.map((item,key)=>(
                                    <div key={key} className='foodModalRow' style={{marginBottom: 10}}>
                                        <h1 style={{fontWeight: 'bold'}}> {item.title} </h1>
                                        <h1> {item.value} </h1>
                                    </div>
                                ))}
                            </div>
                            
                            <div className='black'></div>
                            
                            <div className='Content'>
                                {foodModalBody2?.map((item,key)=>(
                                    <div key={key} className='foodModalRow' style={{marginBottom: 10}}>
                                        <h1 style={{fontWeight: 'bold'}}> {item.title} </h1>
                                        <h1> {item.value} </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='buttons' style={{width: "100%"}}>
                            <div className='btn'>
                                {GeneralBtn(props.buttons.update, UpdateModal, "update")}
                            </div>
                            <div className='btn'>
                                {GeneralBtn(props.buttons.delete, OpenModal, "delete")}
                            </div>
                        </button>
                    </div>
                </div>
                {DeleteModal && <Modal Confirm={DeleteFun} Cancel={CancelModal} />}
            </>
            }
            {updateModal && <Update lang={lang.modal} modalBody={modalBody} />}
        </div>
    </div>
  )
}

export default Food


