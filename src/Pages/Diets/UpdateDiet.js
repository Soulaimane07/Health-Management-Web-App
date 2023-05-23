import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
import { Update } from '../../Components/Functions/CRUD'
import { ConditionBtn } from '../../Components/Buttons/Buttons'


function UpdateDiet(props) {
    const lang = props.lang
    const lang2 = props.lang
    const diet = props.modalBody

    const [image, setimage] = useState(diet.image)
    const [title, setTitlte] = useState(diet.title)
    const [duree, setduree] = useState(diet.duree)
    const [desc, setdesc] = useState(diet.desc)

    const [carbs, setCarbs] = useState(diet.carbs)
    const [protein, setProtein] = useState(diet.protein)
    const [fat, setFat] = useState(diet.fat)

    const selectImage = (e, variable, urlimg) => {
        let value = e.target.files[0]
        variable(value)
        urlimg(URL.createObjectURL(value))
    }
    
    const condittion = image !== null && title !== null && desc !== null && duree > 0 && duree <= 24

    const Newdiet = {
        "title": title,
        "image": image,
        "desc": desc,
        "carbs": carbs,
        "protein": protein,
        "fat": fat,
        "duree": duree,
    }

    const nav = () => {
        window.location.reload()
    }
    const fun = () => {
        Update("/diets", diet?._id, Newdiet, nav)
    }

    const [logourl, setLogoUrl] = useState()

    console.log(Newdiet);

  return (
    <div className='modal UpdateModal'>
        <div className='modalBody' style={{height: "auto", padding: 0, margin: 0}}>
            <button className='close'  onClick={()=> props.setUpdateModal(false)} style={{right: "16%"}} > <MdClose /> </button>
                <div className='CreateBody CreateFoodBody' style={{margin: 0, padding: 0, height: "auto"}}>
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
                                <label> {lang.title} </label>
                                <input type='text' value={title} name='title' onChange={e=> setTitlte(e.target.value)} />
                            </div>
                            <div className='line'>
                                <label> {lang.desc} </label>
                                <textarea value={desc} onChange={(e)=> setdesc(e.target.value)} id="message" rows="4" class="p-2.5 w-full text-sm" placeholder="Write your thoughts here..."></textarea>
                            </div>
                        </div>
                        {ConditionBtn(props.create, condittion, fun)}
                    </div>

                    <div className='black'></div>

                    <div className='Content'>
                        <div className='line'>
                            <label> {lang.carbs} </label>
                            <input type='number' value={carbs} name='calories' onChange={e=> setCarbs(e.target.value)} />
                        </div>
                        <div className='line'>
                            <label> {lang.protein} </label>
                            <input type='number' value={protein} name='calories' onChange={e=> setProtein(e.target.value)} />
                        </div>
                        <div className='line'>
                            <label> {lang.fat} </label>
                            <input type='number' value={fat} name='calories' onChange={e=> setFat(e.target.value)} />
                        </div>
                        <div className='line'>
                            <label> {lang.duree} </label>
                            <input type='number' value={duree} name='houres' onChange={e=> setduree(e.target.value)} />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default UpdateDiet