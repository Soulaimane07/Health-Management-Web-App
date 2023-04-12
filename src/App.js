import './App.css';
import './Media.css';
import { useEffect, useState } from 'react';
import {BrowserRouter} from "react-router-dom" 

import Login from './Pages/Auth/Login/Login'

import Language from "./language/Language.json"
import LoggedIn from './Routes/LoggedIn';

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
          <LoggedIn lang={lang} user={user} account={account} options={options} />
        :
          <Login lang={lang.login} />
        }
    </BrowserRouter>
  );
}

export default App;
