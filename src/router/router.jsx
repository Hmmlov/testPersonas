import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../views/home/home";
import Navbar from "../navbar/navbar";
import { useState } from 'react';
import Person from '../views/person/person';
export const Router = () => {

  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(token);


  const Menu = (content) =>{
    return(
      <>
      <Navbar content={content} />
      </>
    )
  }
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/person" />} />
        <Route path="/home" element={isAuthenticated ? Menu(<Home />) : Menu(<Home />)} />
        <Route path="/person" element={isAuthenticated ? Menu(<Person />) : Menu(<Person />)} />



      </Routes>
    </BrowserRouter>
  );
};