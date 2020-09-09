import React from 'react'
import "./Header.css"

export default function Header({children}) {

    return (
    
        <header className="header">
            <div className="header-left"> 
                <div className="nav-icon">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="logo">
                    <i className="fab fa-youtube"></i>  <span>MinTube</span>
                </div>
            </div>
            {children}
            <div className="header-icons">
                <i className="fas fa-video"></i>
                <i className="fas fa-th"></i>
                <i className="fas fa-bell"></i>
                <i className="fab fa-google"></i>
            </div>
        </header>
    )
}
