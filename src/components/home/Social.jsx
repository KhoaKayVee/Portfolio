import React from 'react'
import "./home.css"

const Social = () => {
  return (
    <div className="home__social">
        <a 
        href="https://www.facebook.com/ngoanhkhoa13062001/" 
        className="home__social-icon" 
        target="blank">
            <i class="uil uil-instagram"></i>
        </a>

        <a href="https://www.instagram.com/kayvee0cap/" 
        className="home__social-icon" 
        target="blank">
            <i class="uil uil-facebook"></i>
        </a>
        
        <a href="https://www.youtube.com/@khoangoanh2705" 
        className="home__social-icon" 
        target="blank">
            <i class="uil uil-youtube"></i>
        </a>
    </div>
  )
}

export default Social