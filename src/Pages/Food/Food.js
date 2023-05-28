import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Food.css'
import { Delete, GetData, ServerLink } from '../../Components/Functions/CRUD'
import {MdClose} from 'react-icons/md'
import { GeneralBtn } from '../../Components/Buttons/Buttons'
import Modal from '../../Components/Modals/Modal'
import UpdateFood from './Pages/UpdateFood'

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
        // setModal(false)
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

                    {DeleteModal && <Modal lang={props.modal} Confirm={DeleteFun} Cancel={CancelModal} />}
                    {updateModal && <UpdateFood options={props.options} modalBody={modalBody} setUpdateModal={setUpdateModal} buttons={props.buttons} create={lang.create.title} lang={lang.modal} />}
                </>
            }
        </div>
    </div>
  )
}

export default Food


