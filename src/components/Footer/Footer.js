import React, {useState} from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { IconContext } from "react-icons";


const Footer = () => {

    const [filter, setFilter] = useState('overlay2')
    const changeFilter = () => filter === 'overlay2'? setFilter('lighten2') : setFilter('overlay2')

    return(
    <>
        <header>
        {/* <Fade top delay={1000} duration={2000}>
          <h1>Contact</h1>
        </Fade> */}
        </header>
        <div className='contact'>
            <p>Please reach out, I am excited to hear from you!</p>
        <IconContext.Provider value={{className: 'react-icons'}}>
            <div className='icons'>
            <a href='mailto:michaela.bateman001@gmail.com'>
                <FiMail/>
            </a>
            <a href='https://www.linkedin.com/in/michaela-bateman-67054b1a6/' target='_blank' rel="noopener noreferrer">
                <FiLinkedin />
            </a>
            <a href='https://github.com/bateman001' target='_blank' rel="noopener noreferrer">
                <FiGithub/>
            </a>
            </div>
        </IconContext.Provider>
        </div>
        {/* <div className="parallax">
        <Parallax />
        </div> */}
    </>
    )
}

export default Footer;

