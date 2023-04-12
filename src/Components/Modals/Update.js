import React from 'react'
import { ServerLink } from '../Functions/CRUD'

function Update(props) {
    const lang = props.lang
    const food = props.modalBody

  return (
    <div className='modal UpdateModal'>
        <div className='modalBody'>
            <h1> Update {food.name} </h1>
            <div className='Content'>
                <div className='line image'>
                    <img src={`${ServerLink}/${food.image}`} />
                </div>
                <div className='line'>
                    <label> {lang.calories} </label>
                    <input type='number' defaultValue={food.calories} name='calories' />
                </div>
                <div className='line'>
                    <label> {lang.carbs} </label>
                    <input type='number' defaultValue={food.carbs} name='carbs' />
                </div>
                <div className='line'>
                    <label> {lang.fat} </label>
                    <input type='number' defaultValue={food.fat} name='fat' />
                </div>
                <div className='line'>
                    <label> {lang.protein} </label>
                    <input type='number' defaultValue={food.protein} name='proteine' />
                </div>
                <div className='line'>
                    <label> {lang.fiber} </label>
                    <input type='number' defaultValue={food.fiber} name='fibre' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update