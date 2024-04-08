import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentDetail from "./Compoents/Pages/StudentDetail/StudentDetail";
import Contact from "./Compoents/Pages/Contact/Contact";

const RouterConfig = ()=> {
  return( 
    <Routes>
      <Route path = "/studentdetail" element = {<StudentDetail/>} exact = {true}/>
      <Route path = "/contact" element = {<Contact/>} exact = {true}/>
    </Routes>)
    

}
export default RouterConfig;
