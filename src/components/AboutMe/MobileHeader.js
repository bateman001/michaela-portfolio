import React from 'react'
import Fade from 'react-reveal';
import { Link } from 'react-router-dom'
export default function MobileHeader(){
    return(
        <section className='mobile-header'>
        <header className='background-1 overlay1'>
            <Fade top delay={1000} duration={2000}>
            <h1>Who I Am</h1>
            </Fade>
        </header>

        <div className="aboutMe-paragraph">
            <p>Constantly growing, Constantly coding. I am a web developer with a love for color, light animation, and functionality. Lets work together!</p>  
            <Link className='aboutMe-button' to='/contact'>contact</Link>        
        </div>
        <section className='background-1 overlay1'></section>
        </section>
    )
}

