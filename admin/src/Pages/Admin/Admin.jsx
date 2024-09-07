import React from "react"
import "./Admin.css"
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar"
import { Route,Routes } from "react-router-dom"
import AddProduct from "../../Components/Navbar/AddProduct/AddProduct"
import ListProduct from "../../Components/Navbar/ListProduct/ListProduct"



function Admin(){
    return(
        <div className="admin">
            <Sidebar/>
            <Routes>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
            <Route path='/listproduct' element={<ListProduct/>}></Route>

            </Routes>

        </div>
    )
}

export default Admin