import React, { useState } from 'react'
import './Diets.css'
import Header from '../../Components/Header/Header'
import { Delete, GetData, ServerLink } from '../../Components/Functions/CRUD'
import {MdClose} from 'react-icons/md'
import { GeneralBtn } from '../../Components/Buttons/Buttons'
import Modal from '../../Components/Modals/Modal'
import UpdateDiet from './UpdateDiet'

function Diets(props) {
    const lang = props.lang
    document.title = `Health Managaer - ${lang.title}`


    const [modalBody, setModalBody] = useState(false)
    const [modal, setModal] = useState(false)

    let diets = GetData("/diets")

    const foodModalBody = [
        {
            "title": "ID",
            "value": modalBody?._id
        },
        {
            "title": lang.modal.title,
            "value": modalBody?.title
        },
    ]

    const foodModalBody2 = [
        {
            "title": lang.modal.carbs,
            "value": modalBody?.carbs,
        },
        {
            "title": lang.modal.fat,
            "value": modalBody?.fat,
        },
        {
            "title": lang.modal.protein,
            "value": modalBody?.protein,
        },
        {
            "title": lang.modal.duree,
            "value": modalBody?.duree,
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
    // const DeleteFun = () => {
    //     Delete("/food/", modalBody._id, fun)
    // }

    const DeleteFun = () => {
        Delete("/diets/", modalBody._id, fun)
    }
  

    const [updateModal, setUpdateModal] = useState(false)
    const UpdateModal = () => {
        // setModal(false)
        setUpdateModal(true)
    }

  return (
    <div className='diets PageBox'>
        <Header title={lang?.title} number={diets?.length} button={lang.create.title} />

        <div className='PageBody'>
            <div className='foodBody'>
                {diets?.map((item,key)=>(
                  <div onClick={()=> setModal(true) & setModalBody(item)} key={key} className='foodItem'>
                      <div className='foodImage'>
                          <img src={`${ServerLink}/${item.image}`} />
                      </div>
                      <h1> {item.title} </h1>
                  </div>
                ))}
            </div>

            {modal &&
                <>
                    <div className='modal'>
                        <button className='close' onClick={()=> setModal(false)}> <MdClose /> </button>
                        <div className='foodModal'>
                            <Header title={modalBody.title} />
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
                            <div style={{marginBottom: 30, marginLeft: 30, marginRight: 20}}>
                                <h1> {lang.modal?.desc} </h1>
                                <p> {modalBody?.desc} </p>
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
                    {updateModal && 
                        <UpdateDiet
                            options={props.options}
                            modalBody={modalBody} 
                            setUpdateModal={setUpdateModal} 
                            create={lang.create.title} 
                            lang={lang.modal} 
                        />
                    }
                </>
            }
        </div>
    </div>
  )
}

export default Diets