import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom" 

import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Users from './Pages/Users/Users';
import UserDetails from './Pages/Users/Pages/UserDetails';
import Food from './Pages/Food/Food';
import CreateUser from './Pages/Users/Pages/CreateUser';
import Login from './Pages/Auth/Login/Login'
import { useEffect, useState } from 'react';
import Account from './Pages/Account/Account';
import Createfood from './Pages/Food/Pages/Createfood';
import Workout from './Pages/Workout/Workout';
import Diets from './Pages/Diets.js/Diets';

import Language from "./language/Language.json"

function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)
  const [account, setAccount] = useState(null)

  useEffect(()=>{
    let user1 = localStorage.getItem('user')
    setUser(JSON.parse(user1))
    user1 !== null ? setLogged(true) : (setLogged(false))

    let account2 = localStorage.getItem('HM-Account')
    setAccount(JSON.parse(account2))
  }, [])
  
  console.log("==>>", account)
  console.log("==> Logged: ",logged, " : ", user?.fname);

  let lang = Language.French.pages
  account === "en" && (lang = Language.English.pages)
  account === "fr" && (lang = Language.French.pages)
  account === "ar" && (lang = Language.Arabic.pages)

  const options = [
    {
        'title': lang.food.options.all,
        "val":"all"
    },
    {
        'title': lang?.food.options.fruits,
        "val":"fruits"
    },
    {
        'title': lang?.food.options.vegetables,
        "val":"vegetables"
    },
    {
        'title': lang?.food.options.meat,
        "val":"meat"
    },
    {
        'title': lang?.food.options.bakery,
        "val":"bakery"
    },
    {
        'title': lang?.food.options.dairy,
        "val":"dairy"
    },
    {
        'title': lang?.food.options.snacks,
        "val":"snacks"
    },
    {
        'title': lang?.food.options.drinks,
        "val":"drinks"
    },
    {
        'title': lang?.food.options.dishes,
        "val":"dishes"
    },
  ]

  return (
    <BrowserRouter>
        {logged ?
          <div className="Page">
            <Routes>
              <Route path='/' element={<Home lang={lang.navbar} />} />
              <Route path='/users'>
                <Route path='' element={<Users lang={lang.users} />} />
                <Route path='create' element={<CreateUser lang={lang.users.create} />} />
                <Route path={`:_id`} element={<UserDetails />} />
              </Route>
              <Route path="/account" element={<Account user={user} account={account} />} />
              <Route path='/food' >
                <Route path="" element={<Food lang={lang.food} options={options} buttons={lang.buttons} />} />
                <Route path="create" element={<Createfood lang={lang.food.modal} lang2={lang.food.create} options={options} create={lang.buttons.create} />} />
              </Route>
              <Route path='/workout'>
                <Route path='' element={<Workout />} />
              </Route>
              <Route path='/diets'>
                <Route path='' element={<Diets />} />
              </Route>
            </Routes>
            <Navigation user={user} lang={lang.navbar} />
          </div>
        :
          <Routes>
            <Route path='/login' element={<Login />}/>
          </Routes>
        }
    </BrowserRouter>
  );
}

export default App;
