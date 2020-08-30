import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>

                <div className="header ">
                    <img className="logoStyle" src="../logo.svg" alt="site logo" width="8%" ></img>
                    {/* <h1>Mensura is a web application, that helps you 
                to calculate the guitar's neck length</h1> */}
                    <Link to="/" className="menuButtons">Home</Link>
                    <Link to="/about" className="menuButtons">About</Link>
                    <div className="headerText custom_selection">
                        Design your own guitar neck length
                </div>
                </div>

            </>
        );
    }
}

export default Header;