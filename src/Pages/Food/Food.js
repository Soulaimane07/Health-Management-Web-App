import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './Food.css'
import Table from '../../Components/Table/Table'
import { GetData } from '../../Components/Functions/CRUD'

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

  return (
    <div className='Food PageBox'>
        <Header title="Food" button="Create Food" />

        <div className='PageBody'>
            <div className='options'>
                {options.map((item,key)=>(
                    <button key={key} className={`optionBtn ${item.title === option && "btnactive"}`} onClick={()=> setOption(item.title)}> 
                        <h2> {item.title} </h2>
                    </button>
                ))}
            </div>

            <img src={`https://health-manager.onrender.com${food[0]?.image}`} />

            <div className='Foodbody'>
                <Table data={[]} />
            </div>
        </div>
    </div>
  )
}

export default Food