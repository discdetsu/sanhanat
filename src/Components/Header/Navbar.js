import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if (window.scrollY >= 48){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <nav className={color ? 'navbar scroll-navbar' : 'navbar'}>
            <ul>
                <li className={2 === 1 ? 'current' : null}><div onClick={() => {
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}>Home</div></li>
                <li><div onClick={() => {
                    const anchor = document.querySelector('.experiences-title')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}>Experiences</div></li>
                <li><div onClick={() => {
                    const anchor = document.querySelector('.projects')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>Projects</div></li>
                <li><a href='/#'> Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;