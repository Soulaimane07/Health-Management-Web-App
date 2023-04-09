import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import { ConditionBtn } from '../../../Components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

function Createfood(props) {
    const lang = props.lang
    const lang2 = props.lang2

    document.title = `Health Manager - ${lang2.title}`


    const [name, setname] = useState(null)
    const [type, setType] = useState(null)
    const [calories, setcalories] = useState(null)
    const [carbs, setcarbs] = useState(null)
    const [fat, setfat] = useState(null)
    const [proteine, setproteine] = useState(null)
    const [fibre, setfibre] = useState(null)
    const [image, setimage] = useState(null)
    
    const Food ={
            image : image,
            name: name,
            type: type,
            calories : calories,
            carbs : carbs,
            fat : fat,
            protein: proteine,
            fiber : fibre,
    }
    
    console.log(Food)
    const condittion = image !== null && name !== null && type !== null && calories !== null && carbs !== null && fat !== null && proteine !== null && fibre !== null 
    
    const navigate = useNavigate()
    const fun = () => {
        navigate('/food')
    }

    console.log(condittion);

    const [logourl, setLogoUrl] = useState()
    
    const selectImage = (e, variable, urlimg) => {
        variable(e.target.files[0])
        urlimg(URL.createObjectURL(e.target.files[0]))
    }

    const Types = props.options

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
                        <label> {lang.name} </label>
                        <input type='text' name='name' onChange={e=> setname(e.target.value)} />
                    </div>
                    <div className='line'>
                        <label> {lang.type} </label>
                        <select onChange={e => setType(e.target.value)}>
                            {Types.map((item,key)=>(
                                <option key={key} value={item.val}> {item.title} </option>
                            ))}
                        </select>
                    </div>
                </div>
                {ConditionBtn(props.create, condittion, fun)}
            </div>
            
            <div className='black'></div>
            
            <div className='Content'>
                <div className='line'>
                    <label> {lang.calories} </label>
                    <input type='number' name='calories' onChange={e=> setcalories(e.target.value)} />
                </div>
                <div className='line'>
                    <label> {lang.carbs} </label>
                    <input type='number' name='carbs' onChange={e=> setcarbs(e.target.value)} />
                </div>
                <div className='line'>
                    <label> {lang.fat} </label>
                    <input type='number' name='fat' onChange={e=> setfat(e.target.value)}/>
                </div>
                <div className='line'>
                    <label> {lang.protein} </label>
                    <input type='number' name='proteine' onChange={e=> setproteine(e.target.value)}/>
                </div>
                <div className='line'>
                    <label> {lang.fiber} </label>
                    <input type='number' name='fibre' onChange={e=> setfibre(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createfood