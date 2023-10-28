import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="main">
            <div className="SideNavbar">
                <h4><Link to="/home" ><img className="jtdlogo" src="/resources/pic2.jpeg" alt="" /></Link></h4>
                <div className="dropdown">
                    <h4><Link to="/course" ><img className="livebooks" src="/resources/LIvebooks.png" alt="" /></Link></h4>
                    <div class="dropdown-content"><p>Livebooks</p></div>
                </div>
                <div className="tooldown">
                    <h4><img className="tooldown    tools" src="/resources/Tools.png" alt="" /></h4>
                    <div className="tooldown-content"><p>Tools</p></div>
                </div>
                <div className="accountdroptdown">
                    <h4> <Link to="/signup"><img className="Account  accountdroptdown" src="/resources/Account.png" alt="" /></Link></h4>
                    <div className="account-content"><p>Account</p></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;