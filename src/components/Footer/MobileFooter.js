import React from 'react'
import  Fade from 'react-reveal'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Link } from 'react-scroll'

export default function MobileFooter(){

    return(
        <>
        <section className='mobile-header'>
        <header className='background-1 overlay2'>
            <Fade top delay={1000} duration={2000}>
            <h1>Contact</h1>
            </Fade>
        </header>

        <div className='contact'>
            <p>Please reach out, I am excited to hear from you!</p>
            <div className='icon-container'>
                <Link activeClass='active' to='contact-form' className='react-icons' smooth={true} spy={true} duration={1000}>
                    <FiMail/>
                </Link>
                <a href='https://www.linkedin.com/in/michaela-bateman-67054b1a6/' className='react-icons' target='_blank' rel="noopener noreferrer">
                    <FiLinkedin />
                </a>
                <a href='https://github.com/bateman001' target='_blank' className='react-icons' rel="noopener noreferrer">
                    <FiGithub/>
                </a>
            </div>
        </div>
        <section className='background-1 overlay2'></section>
        </section>

        </>
    )
}