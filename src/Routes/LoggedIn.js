import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navigation from '../Pages/Navigation/Navigation'
import Home from '../Pages/Home/Home'
import Users from '../Pages/Users/Users'
import CreateUser from '../Pages/Users/Pages/CreateUser'
import UserDetails from '../Pages/Users/Pages/UserDetails'
import Account from '../Pages/Account/Account'
import Food from '../Pages/Food/Food'
import Createfood from '../Pages/Food/Pages/Createfood'
import Workout from '../Pages/Workout/Workout'
import Diets from '../Pages/Diets/Diets'
import CreateDiet from '../Pages/Diets/CreateDiet'

function LoggedIn(props) {
    const lang = props.lang
    const user = props.user
    const account = props.account
    const options = props.options

  return (
    <div className="Page">
        <Routes>
            <Route path='/' element={<Home lang={lang.navbar} ChartOptions={props.ChartOptions} />} />
            <Route path='/users'>
                <Route path='' element={<Users lang={lang.users} />} />
                <Route path='create' element={<CreateUser lang={lang.users.create} />} />
                <Route path={`:_id`} element={<UserDetails lang={lang.users} buttons={lang.buttons} modal={lang.modal} />} />
            </Route>
            <Route path="/account" element={<Account user={user} account={account} lang={lang} />} />
            <Route path='/food' >
                <Route path="" element={<Food lang={lang.food} options={options} buttons={lang.buttons} modal={lang.modal} />} />
                <Route path="create" element={<Createfood lang={lang.food.modal} lang2={lang.food.create} options={options} create={lang.buttons.create} />} />
            </Route>
            <Route path='/workout'>
                <Route path='' element={<Workout />} />
            </Route>
            <Route path='/diets'>
                <Route path='' element={<Diets lang={lang.diets} buttons={lang.buttons} modal={lang.modal} />} />
                <Route path='create'element={<CreateDiet lang={lang.diets.modal} lang2={lang.diets.create} create={lang.buttons.create} /> } />
            </Route>
        </Routes>
        <Navigation user={user} lang={lang.navbar} />
    </div>
  )
}

export default LoggedIn