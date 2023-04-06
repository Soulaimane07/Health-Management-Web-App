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
import Createfood from './Pages/Food/Pages/Create/Createfood';
import Workout from './Pages/Workout/Workout';

function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(()=>{
    let user1 = localStorage.getItem('user')
    setUser(JSON.parse(user1))
    user1 !== null ? setLogged(true) : setLogged(false)
  }, [])

  console.log("==> Logged: ",logged, " : ", user?.fname);

  return (
    <BrowserRouter>
        {logged ?
          <div className="Page">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users'>
                <Route path='' element={<Users />} />
                <Route path='create' element={<CreateUser />} />
                <Route path={`:_id`} element={<UserDetails />} />
              </Route>
              <Route path="/account" element={<Account user={user} />} />
              <Route path='/food' >
                <Route path="" element={<Food />} />
                <Route path="create" element={<Createfood />} />
              </Route>
              <Route path='/workout' element={<Workout />}>

              </Route>
            </Routes>
            <Navigation user={user} />
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
