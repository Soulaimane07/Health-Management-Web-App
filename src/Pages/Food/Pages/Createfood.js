import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import { CreateBtn } from '../../../Components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

function Createfood() {
    document.title = "Health Manager - Create Food"

    const [name, setname] = useState(null)
    const [calories, setcalories] = useState(null)
    const [carbs, setcarbs] = useState(null)
    const [fat, setfat] = useState(null)
    const [proteine, setproteine] = useState(null)
    const [fibre, setfibre] = useState(null)
    const [image, setimage] = useState(null)
    
    const Food ={
            image : image,
            name: name,
            calories : calories,
            carbs : carbs,
            fat : fat,
            protein: proteine,
            fiber : fibre,
    }
    
    console.log(Food)
    const condittion = image !== null && name !== null && calories !== null && carbs !== null && fat !== null && proteine !== null && fibre !== null 
    
    const navigate = useNavigate()
    const fun = () => {
        navigate('/food')
    }

    console.log(condittion);

  return (
    <div className='Create PageBox'>
        <Header title="Create Food"  />
        <hr className='hr'></hr> 
        
        <div className='CreateBody CreateFoodBody'>
            <div className='Content'>
                <div>
                    <div className='line file'>
                        <label>Image</label>
                        <input type='file' name='imgae' onChange={e=> setimage(e.target.files[0])} />
                    </div>
                    <div className='line'>
                        <label>Name</label>
                        <input type='text' name='name' onChange={e=> setname(e.target.value)} />
                    </div>
                    <div className='line'>
                        <label>Type</label>
                        <input type='text' name='calories' onChange={e=> setcalories(e.target.value)} />
                    </div>
                </div>
                {CreateBtn("Ajouter", condittion, fun)}
            </div>
            
            <div className='black'></div>
            
            <div className='Content'>
                <div className='line'>
                    <label>Calories</label>
                    <input type='number' name='calories' onChange={e=> setcalories(e.target.value)} />
                </div>
                <div className='line'>
                    <label>Carbs</label>
                    <input type='number' name='carbs' onChange={e=> setcarbs(e.target.value)} />
                </div>
                <div className='line'>
                    <label>Fat</label>
                    <input type='number' name='fat' onChange={e=> setfat(e.target.value)}/>
                </div>
                <div className='line'>
                    <label>Proteine</label>
                    <input type='number' name='proteine' onChange={e=> setproteine(e.target.value)}/>
                </div>
                <div className='line'>
                    <label>Fibre</label>
                    <input type='number' name='fibre' onChange={e=> setfibre(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createfood