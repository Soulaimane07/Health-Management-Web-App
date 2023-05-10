import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import { ConditionBtn } from '../../Components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../Components/Functions/CRUD'

function CreateDiet(props) {
    const lang = props.lang
    const lang2 = props.lang2

    const [image, setimage] = useState(null)
    const [title, setTitlte] = useState(null)
    const [duree, setduree] = useState(null)
    const [desc, setdesc] = useState(null)

    const [carbs, setCarbs] = useState(null)
    const [protein, setProtein] = useState(null)
    const [fat, setFat] = useState(null)

    

    const condittion = image !== null && title !== null && desc !== null && duree > 0 && duree <= 24

    const diet = {
        "title": title,
        "image": image,
        "desc": desc,
        "carbs": carbs,
        "protein": protein,
        "fat": fat,
        "duree": duree,
    }

    const navigate = useNavigate()
    const nav = () => {
        navigate("/diets")
    }

    const fun = () => {
        Post("/diets", diet, nav)
    }

    const [logourl, setLogoUrl] = useState()
    
    const selectImage = (e, variable, urlimg) => {
        variable(e.target.files[0])
        urlimg(URL.createObjectURL(e.target.files[0]))
    }

    console.log(diet);


  return (
    <div className='Create PageBox'>
        <Header title={lang2.title}  />
        <hr className='hr'></hr> 
        
        <div className='CreateBody CreateFoodBody'>
            <div className='Content'>
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
                        <input type='text' name='title' onChange={e=> setTitlte(e.target.value)} />
                    </div>
                    <div className='line'>
                        <label> {lang.desc} </label>
                        <textarea onChange={(e)=> setdesc(e.target.value)} id="message" rows="4" class="p-2.5 w-full text-sm" placeholder="Write your thoughts here..."></textarea>
                    </div>
                </div>
                {ConditionBtn(props.create, condittion, fun)}
            </div>

            <div className='black'></div>

            <div className='Content'>
                <div className='line'>
                    <label> {lang.carbs} </label>
                    <input type='number' name='calories' onChange={e=> setCarbs(e.target.value)} />
                </div>
                <div className='line'>
                    <label> {lang.protein} </label>
                    <input type='number' name='calories' onChange={e=> setProtein(e.target.value)} />
                </div>
                <div className='line'>
                    <label> {lang.fat} </label>
                    <input type='number' name='calories' onChange={e=> setFat(e.target.value)} />
                </div>
                <div className='line'>
                    <label> {lang.duree} </label>
                    <input type='number' name='houres' onChange={e=> setduree(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateDiet