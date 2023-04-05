import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'

function Home() {
  const Boxes=[
    {
      "title":"Boxe1",
      "icon":"",
    },
    {
      "title":"Boxe2",
      "icon":"",
    },
    {
      "title":"Boxe3",
      "icon":"",
    },

  ]
  return (
    <div className='Home PageBox'>
      <Header title="Dashboard" />
      
      <div className='boxes'>
       {Boxes?.map((item,key)=>(
        <div key={key} className='boxe'>
          {item.title}
        </div>
       ))}
      </div>
    </div>
  )
}

export default Home