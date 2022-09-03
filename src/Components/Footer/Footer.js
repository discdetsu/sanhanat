import React from 'react';
import './Footer.css';
import logo from '../../static/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const Footer = () => {



    return (
        <footer>
        <div className="footer-content">
            <div className="footer-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="curve">
                    <div className="contact">
                        <a href="mailto:sanhanat.na@ku.th" title="Email me">sanhanat.na@ku.th</a>
                    </div>
                    <ul className="links">
                        <li>
                            <a href="https://github.com/discdetsu">
                            <FontAwesomeIcon icon={faGithubAlt} />
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/DiscDesu">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sanhanat-nammaliwan-ku/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul>
                    <div className="info">
                        <p>Thanks to Cory Hughart for the design</p>
                    </div>
                    <button type="button" onClick={scrollToTop} className="to-top">
                    <FontAwesomeIcon className='fa' icon={faArrowUp} />
                    </button>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;