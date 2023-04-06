import React, { useState } from 'react'
import Header from '../../../../Components/Header/Header'
import '../../Food.css'
import { CreateBtn } from '../../../../Components/Buttons/Buttons'

function Createfood() {
    const [name, setname] = useState(null)
    const [calories, setcalories] = useState(null)
    const [carbs, setcarbs] = useState(null)
    const [fat, setfat] = useState(null)
    const [proteine, setproteine] = useState(null)
    const [fibre, setfibre] = useState(null)
    const [image, setimage] = useState(null)
    const Food ={
            image : image ,
            name: name,
            calories : calories,
            carbs : carbs,
            fat : fat,
            protein: proteine,
            fiber : fibre,
    }
    console.log(Food)
    const condittion = image !== null && name !== null && calories !== null && carbs !== null && fat !== null && proteine !== null && fibre !== null 
    
  return (
    <div className='Create PageBox'>
        <Header title="Create Food"  />
        <hr className='hr'></hr> 
        <div className='CreateBody'>
            <div className='line file'>
                <label>Image</label>
                <input type='file' name='imgae' onChange={e=> setimage(e.target.files[0])} />
            </div>
            <div className='line'>
                <label>Name</label>
                <input type='text' name='name' onChange={e=> setname(e.target.value)} />
            </div>
            <div className='line'>
                <label>Calories</label>
                <input type='text' name='calories' onChange={e=> setcalories(e.target.value)} />
            </div>
            <div className='line'>
                <label>Carbs</label>
                <input type='text' name='carbs' onChange={e=> setcarbs(e.target.value)} />
            </div>
            <div className='line'>
                <label>Fat</label>
                <input type='text' name='fat' onChange={e=> setfat(e.target.value)}/>
            </div>
            <div className='line'>
                <label>Proteine</label>
                <input type='text' name='proteine' onChange={e=> setproteine(e.target.value)}/>
            </div>
            <div className='line'>
                <label>Fibre</label>
                <input type='text' name='fibre' onChange={e=> setfibre(e.target.value)} />
            </div>
            {CreateBtn("Ajouter", "/food", Food, condittion, null )}
        </div>  
        
    </div>
  )
}

export default Createfood