import React from 'react';
import { Routes,Route } from "react-router-dom"
import Home from "./markup/pages/Home"
import './assets/template_assets/css/bootstrap.css';
import './assets/template_assets/css/style.css'
import './assets/template_assets/css/responsive.css';
import './assets/template_assets/css/color.css'
import Header from './markup/components/Header/Header';
import Footer from './markup/components/Footer/Footer';
import Login from './markup/pages/Login';
import AddEmployee from './markup/pages/admin/AddEmployee';
import Unauthorized from './markup/pages/UnAuthorized';
import Orders from './markup/pages/admin/Orders';
import Employees from './markup/pages/admin/Employees';
import Customers from './markup/pages/admin/Customers';
import PrivateAuthRoute from './markup/components/auth/PrivateAuthRoute';




function App() {
  
 return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/unauthorized" element ={<Unauthorized/>} />

        <Route path="/admin/add-employee" element = {
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          } />
        <Route path="/admin/orders" element ={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          } />
        <Route path="/admin/employees" element ={<Employees/>} />
        <Route path="/admin/customers" element ={<Customers/>} />


        {/* 
          Customers (/admin/customers) - managers and admins
          Orders (/admin/orders) - Can be accessed by all employees
          Add employee (/admin/add-employee) - admins only 
            - Admin: 3 
            - Manager: 2 
            - Employee: 1 
        */}
        
      </Routes>
      <Footer/>

  
      
    </>
  )
}

export default App
