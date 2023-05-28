import React, { useState } from 'react'
import { Update } from '../../../Components/Functions/CRUD'
import { useNavigate } from 'react-router-dom'
import { ConditionBtn } from '../../../Components/Buttons/Buttons'
import {MdClose} from 'react-icons/md'


function UpdateFood(props) {
    const lang = props.lang
    const lang2 = props.lang
    const food = props.modalBody

    const [name, setname] = useState(food.name)
    const [type, setType] = useState(food.type)
    const [calories, setcalories] = useState(food.calories)
    const [carbs, setcarbs] = useState(food.carbs)
    const [fat, setfat] = useState(food.fat)
    const [proteine, setproteine] = useState(food.protein)
    const [fibre, setfibre] = useState(food.fiber)
    const [image, setimage] = useState(food.image)

    const Types = props.options
    const condittion = image !== null && name !== null && type !== null && calories !== null && carbs !== null && fat !== null && proteine !== null && fibre !== null 

    const selectImage = (e, variable, urlimg) => {
        let value = e.target.files[0]
        variable(value)
        urlimg(URL.createObjectURL(value))
    }

    const NewFood ={
        image : image,
        name: name,
        type: type,
        calories : calories,
        carbs : carbs,
        fat : fat,
        protein: proteine,
        fiber : fibre,
    }

    const navigate = useNavigate()
    const nav = () => {
        navigate("/food")
        window.location.reload()
    }
    const fun = () => {
        Update("/food", food?._id, NewFood, nav)
    }

    const [logourl, setLogoUrl] = useState()

    console.log(NewFood);

    

  return (
    <div className='modal UpdateModal'>
        <div className='modalBody' style={{height: "auto", padding: 0, margin: 0}}>
            <button className='close' onClick={()=> props.setUpdateModal(false)} style={{right: "16%"}} > <MdClose /> </button>

            <div className='CreateBody CreateFoodBody' style={{margin: 0}}>
                <div className='Content' style={{margin: 0}}>
                    <div>
                        <div className="image-input flex items-center justify-center w-full">
                            {logourl ?  
                                <div className='logo'>
                                    <img src={logourl} /> 
                                </div>
                            :
                                <label className="image flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm"> {lang2.image1} <span className="font-semibold"> {lang2.image2} </span></p>
                                        <p className="text-sm"></p>
                                    </div>
                                    <input 
                                        id="dropzone-file" 
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*" 
                                        onChange={(e) => selectImage(e, setimage, setLogoUrl)}
                                    />
                                </label>
                            }
                        </div>
                        <div className='line'>
                            <label> {lang.name} </label>
                            <input type='text' name='name' value={name} onChange={e=> setname(e.target.value)} />
                        </div>
                        <div className='line'>
                            <label> {lang.type} </label>
                            <select value={type} onChange={e => setType(e.target.value)}>
                                {Types?.map((item,key)=>(
                                    <option key={key} value={item.val}> {item.title} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {ConditionBtn(props.buttons.update, condittion, fun)}
                </div>
                
                <div className='black'></div>
                
                <div className='Content' style={{margin: 0}}>
                    <div className='line'>
                        <label> {lang.calories} </label>
                        <input type='number' value={calories} name='calories' onChange={e=> setcalories(e.target.value)} />
                    </div>
                    <div className='line'>
                        <label> {lang.carbs} </label>
                        <input type='number' value={carbs} name='carbs' onChange={e=> setcarbs(e.target.value)} />
                    </div>
                    <div className='line'>
                        <label> {lang.fat} </label>
                        <input type='number' value={fat} name='fat' onChange={e=> setfat(e.target.value)}/>
                    </div>
                    <div className='line'>
                        <label> {lang.protein} </label>
                        <input type='number' value={proteine} name='proteine' onChange={e=> setproteine(e.target.value)}/>
                    </div>
                    <div className='line'>
                        <label> {lang.fiber} </label>
                        <input type='number' value={fibre} name='fibre' onChange={e=> setfibre(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateFood