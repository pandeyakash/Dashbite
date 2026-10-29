import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>   
            </div>
            <div className="login-container">
                <button className="login-btn" onClick={() => setBtnText(btnText === "Login" ? "Logout" : "Login")}>
                    {btnText}
                </button>
            </div>
        </div>
    )
}

export default Header;