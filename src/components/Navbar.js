import React, {useEffect, useState} from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
// import Resume from '../resume.pdf';


function Navbar() {

    const [click, setClick] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(100);
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    const [scrollDirection, setScrollDirection] = useState("down");

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const scrollListner = () => {
        // make navbar not move for the first 100px
        if (document.body.getBoundingClientRect().top < -100) {
            setBodyOffset(document.body.getBoundingClientRect());
        }
        console.log(document.body.getBoundingClientRect());
        
        // if last scrolled position is higher, then it's scroll up, else it's scroll down
        setScrollDirection(lastScrollPos >= -bodyOffset.top ? "down" : "up");
        // continue setting the top screen position
        setLastScrollPos(-bodyOffset.top);
    }

    useEffect(() => {
        window.addEventListener('scroll', 
        scrollListner);
        return (() => {
            window.removeEventListener('scroll', scrollListner);
        })
    });

    return(
        <>
            <nav className={scrollDirection === "down" ? 'navbar' : 'navbar hide'}>
                
                <HashLink to='#' className='navbar-logo'>
                    <div>Shine Chikwapulo<div className="hidden-arrow">&nbsp; <i class="fa-solid fa-arrow-right-long"></i></div></div>
                </HashLink>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <HashLink to='#about' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            About
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink to='#experience' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Experience
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink to='#work' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Work
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink to='#contact' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Contact
                        </HashLink>
                    </li>
                
                </ul>


            </nav>
        </>
    );
}

export default Navbar;