import React from 'react';
import Navbar from './Navbar';
import './Header.css'
import profile from '../../static/images/profile.svg'

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="header-container">
            <div className="banner">
                <div className="banner-title">
                    <h1>Sanhanat Nammaliwan</h1>
                </div>
                <div className="sub-banner-title">
                    <h2>Computer Vision Enthusiast & API Master</h2>
                </div>
            </div>
            <div className="profile-pic">
                <img src={profile} alt="profile-pic" />
            </div>
            <div className="bio">
                <p><>
                    For over a decade, I have studied and inscribed the
                    sacred runes and performed the arcane rituals that
                    breathe life into the realm of the internet.
                    <br />
                    <br />
                    The web can sometimes be indistinguishable from
                    magic, but I have the knowledge and patience required
                    to make just about anything.
                    </>
                </p>
            </div>
        </div>
        </header>
    )
}

export default Header;