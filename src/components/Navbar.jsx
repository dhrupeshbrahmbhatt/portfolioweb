import React from "react";
import "../components/Navbar.css";

export const Navbar = () => {
  return (
    <div>
        <nav className="container">
            <div className="container-1">
                <h4>Dhrupesh</h4>
            </div>
            <div className="container-2">
                <ul className="Navbar-list">
                    <li className="Navbar-list-item"><a href="#About">About</a></li>
                    <li className="Navbar-list-item"><a href="#Experiance">Experience</a></li>
                    <li className="Navbar-list-item"><a href="#Work">Work</a></li>
                    <li className="Navbar-list-item"><a href="#Contact">Contact</a></li>
                    <button className="flex">
                        <a href="#">Resume</a>
                    </button>
                    <button className="X_icon" >
                        <i className="fa-sharp fa-regular fa-x" />
                    </button>
                </ul>
            </div>
        </nav>
        <button className="Bars_icon" >
            <i className="fa-solid fa-bars-staggered" />
        </button>
    </div>
  );
};