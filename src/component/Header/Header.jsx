import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [mode, setMode] = useState('fas fa-moon');
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-tittle">Where in the World?</div>
                    <button className="mode" 
                    onClick={() => setMode(!mode)}
                    >
                        <i className={mode ? 'fas fa-moon' : 'fas fa-sun light' }></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;