import React from "react";
import './Header.css';

function Header() {
    return (
        <>
            <nav>
                <div className="title">
                    <img src="../public/react-js-logo.png" alt="React logo"/>
                    <h1>ReactFacts</h1>
                </div>
                <h3>React Course - Project 1</h3>
            </nav>
        </>
    )
}

export default Header;