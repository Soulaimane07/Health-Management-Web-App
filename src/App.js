import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 

import Home from './Pages/Home/Home';
import Navigation from './Pages/Navigation/Navigation';
import Users from './Pages/Users/Users';
import UserDetails from './Pages/Users/Pages/UserDetails';
import Food from './Pages/Food/Food';
import CreateUser from './Pages/Users/Pages/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <div className="Page">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users'>
            <Route path='' element={<Users />} />
            <Route path='create' element={<CreateUser />} />
            <Route path={`:_id`} element={<UserDetails />} />
          </Route>
            <Route path="/food" element={<Food />} />
        </Routes>
      </div>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
