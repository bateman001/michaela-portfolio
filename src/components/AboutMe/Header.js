import React, {useState} from 'react';
import Fade from 'react-reveal';
import Parallax from '../MovingBackground/Parallax';
import {Link} from 'react-router-dom';

const Header = () => {

    const [filter, setFilter] = useState('overlay1')
    const changeFilter = () => filter === 'overlay1'? setFilter('lighten1') : setFilter('overlay1')

    return(
    <section className='aboutMe'>
        <header className={filter} onClick={() => changeFilter()}>
        <Fade top delay={1000} duration={2000}>
          <h1>Who I Am</h1>
        </Fade>
        </header>
        <div className="aboutMe-paragraph">
        <p>Constantly growing, Constantly coding. I am a web developer with a love for color, light animation, and functionality. Lets work together!</p>  
        <Link className='aboutMe-button' to='/contact'>contact</Link>        
        </div>
        <div className="parallax">
        <Parallax />
        </div>
        <header className={`bottom-window ${filter}`} onClick={() => changeFilter()}></header> 
    </section>
    )
}


export default Header;

