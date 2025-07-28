import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start items-center'>
                <a href="/">Thx for visiting!!</a>
            </div>
            <div className='socials'>
                {socialImgs.map((src)=>(
                    <a href={src.url} key={src.name} className='icon' target='_blank'>
                        <img src={src.imgPath} alt={src.name} />
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    ©️ {new Date().getFullYear()} Gokulnithi | 😊
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
