import React from 'react';
import "./style.css"; 

function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-inverse sticky-top mb-2 navbar-custom">
            <div className="container">
                <a className="navbar-brand " href="#landing">Namita Shenai</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto text-light">
                        <li className="nav-item">
                            <a className="nav-link " href="#about">About</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#skills">Technical Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#projects">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link " href="/resume/NamitaShenaiResume.pdf" target="_blank" title="NamitaShenaiResume">Resume</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar; 