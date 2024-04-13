import React, { useEffect, useState } from "react";

import "./StyleSheet.css";
import logo1 from "../assets/logo-grabfood.svg" 
import logo2 from "../assets/logo-grabfood-white.svg" 
import { Link } from "react-router-dom";
function Navbar(){

    const[color,setColor]=useState(false)
    const changeBackGround=()=>{
     if(window.scrollY>=70){
      setColor(true)
     }else{
      setColor(false)
     }
    }
    window.addEventListener("scroll",changeBackGround)

    return (
        <div 
            className={color ? "container-navbar shadow active" : "container-navbar"}
            style={{ filter: color ? 'none' : 'grayscale(100%)' }}>
                
            <div className="headerContainer p-3 container-sm d-flex justify-content-between align-items-center">
            
            <div className="logo-box">
                <Link to="/GrabFoodApp"><img 
                    className="logoApp" 
                    src= {color ? logo1:logo2} 
                    style={{ filter: color ? 'none' : 'grayscale(100%)' }}
                    alt="" /></Link>
            </div>

            <div className="btn-group">
                <div className="btn-child btn btn-light rounded cart" >
                    <a href="#" >
                    </a>
                </div>
                <div className="btn-child btn btn-light rounded logIn">Đăng nhập/ Đăng ký</div>
                <div className="btn-child btn btn-light rounded lang">EN/</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;