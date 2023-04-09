import React from 'react'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table/Table'



function Workout() {
  document.title = "Health Manager - Workout"

  return (
    <div className='PageBox'>
        <Header title='Workout' button='Create Workout' />
        <Table data={[]} header={["id", "name"]} />
    </div>
  )
}

export default Workout