import React from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { getAllcourse } from "../../Redux/Productreducer/action";

const NavBar = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const displayCourse = async() => {
      
        await dispatch(getAllcourse())
        navigate("/course")
    }


    return (
        <div className="main">
            <div className="SideNavbar">
                <h4><Link to="/home" ><img className="jtdlogo" src="/resources/jtdimg.jpeg" alt="logo" /></Link></h4>
                <div className="dropdown">
                    <h4><img className="livebooks" src="/resources/LIvebooks.png" alt="livebooks" onClick={() => displayCourse()} /></h4>
                    <div className="dropdown-content"><p>Livebooks</p></div>
                </div>
                <div className="tooldown">
                    <h4><img className="tooldown    tools" src="/resources/Tools.png" alt="tools" /></h4>
                    <div className="tooldown-content"><p>Tools</p></div>
                </div>
                <div className="accountdroptdown">
                    <h4> <Link to="/signup"><img className="Account  accountdroptdown" src="/resources/Account.png" alt="account" /></Link></h4>
                    <div className="account-content"><p>Account</p></div>
                </div>
            </div>
        </div>
    )
}


export default NavBar;