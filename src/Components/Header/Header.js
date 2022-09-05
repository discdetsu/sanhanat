import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import profile from '../../static/images/profile.svg'

const Header = () => {
    return (
        <header id='home'>
            <Navbar />
            <div className="header-container">
            <div className="banner">
                <div className="banner-title">
                    <h1>Sanhanat Nammaliwan</h1>
                </div>
                <div className="sub-banner-title">
                    <h2>Computer Vision & Data Enthusiast</h2>
                </div>
            </div>
            <div className="profile-pic">
                <img src={profile} alt="profile-pic" />
            </div>
            <div className="bio">
                <p><>
                    For the 11,719 raw images, I have annotated and built all the
                    processes of data engineering, modeling and deploying that
                    breathe life into the realm of the e-commerce.
                    <br />
                    <br />
                    Computer vision can sometimes be unfathomable from
                    the abyss, but I have the StackOverflow and patience 
                    to make just about anything.
                    </>
                </p>
            </div>
        </div>
        </header>
    )
}

export default Header;