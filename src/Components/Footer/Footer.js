import React from 'react';
import './Footer.css';
import logo from '../../static/images/logo.png'

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const Footer = () => {



    return (
        <footer>
        <div class="footer-content">
            <div class="footer-container">
                <div class="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div class="curve">
                    <div class="contact">
                        <a href="mailto:sanhanat.na@ku.th" title="Email me">sanhanat.na@ku.th</a>
                    </div>
                    <ul class="links">
                        <li>
                            <a href="/#">github</a>
                        </li>
                        <li>
                            <a href="/#">facebook</a>
                        </li>
                        <li>
                            <a href="/#">linkedin</a>
                        </li>
                    </ul>
                    <div class="info">
                        <p>© 2022 Sanhanat Nammaliwan</p>
                    </div>
                    <button type="button" onClick={scrollToTop} class="to-top">up</button>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;