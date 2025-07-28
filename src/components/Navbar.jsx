import React, { useState } from 'react'
import { navLinks } from '../constants'
import { useEffect} from 'react';
const Navbar = () => {
    const [scroll,setscroll] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY >10;
            setscroll(true)
        }

        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <header className={`navbar ${scroll ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href="#hero">
                Gokulnithi P
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map((link,name)=>(
                        <li key={name} className='group'>
                            <a href={link.link}>
                                <span>{link.name}</span>
                                <span className='underline'></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar
