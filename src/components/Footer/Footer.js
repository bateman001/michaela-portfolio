import React, {useState} from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import Fade from 'react-reveal';
import { Link } from 'react-scroll'

import Parallax from '../MovingBackground/Parallax'

const Footer = () => {

    const [filter, setFilter] = useState('overlay2')
    const changeFilter = () => filter === 'overlay2'? setFilter('lighten2') : setFilter('overlay2')

    return(
        <section className='aboutMe'>
        <header className='lighten2'>
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
        <div className="parallax">
            <Parallax />
        </div>
        <header className={`bottom-window lighten2`} onClick={() => changeFilter()}></header> 
    </section>
    )
}

export default Footer;

