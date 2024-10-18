import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from "./components/Signup";
import Forget from "./components/Forget";
import Home from "./components/Home";
import AddRestaurant from "./components/AddRestaurent";
import React from 'react'





function App() {
  return <React.Fragment>
    <header>
     
    </header>
    <main>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/forget" element={<Forget />}></Route>
      <Route path="/AddRestaurant" element={<AddRestaurant />}></Route>

    </Routes>
    </main>

  </React.Fragment>;
}

export default App;
