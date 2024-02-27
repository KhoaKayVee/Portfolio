import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">KayVee</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                
                <li>
                    <a href="#skills" className="footer__link">My Programming Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.facebook.com/ngoanhkhoa13062001/" 
                    className="footer__social-link" 
                    target="blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a 
                    href="https://www.instagram.com/kayvee0cap/" 
                    className="footer__social-link" 
                    target="blank">
                    <i class="bx bxl-instagram"></i>
                </a>
        
                <a 
                    href="https://www.youtube.com/@khoangoanh2705" 
                    className="footer__social-link" 
                    target="blank">
                    <i class="bx bxl-youtube"></i>
                </a>
            </div>

            <span className="footer__copy">Copyright 2023 © KayVee</span>
        </div>
    </footer>
  )
}

export default Footer