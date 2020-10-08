import React from 'react';
import Projects from './Projects';
import data from '../../DATA'
import mandala from '../../styling/images/noun_Mandala_1112539.png'
import { Link } from 'react-scroll'

export default function Portfolio(){

    return(
    <div className='portoflio'>
        <section className='portfolio-intro'>
            <div className='portfolio-bar'>
            <Link activeClass='active' to='portfolio-img' smooth={true} spy={true} duration={1000}>
                <div className='project-box'><img src={mandala} alt='mandala'/></div>
            </Link>
                {data.PROJECTS.map((x, i) => {
                    return <Box key={i} index={i} project={x} />
                })}
            </div>      
        <div id='portfolio-img' className='portfolio-img my-pic'>
            <div className='portfolio-text'>
                <h1>My Portfolio</h1>
                <p>See what I'm made of</p>                
            </div>
        </div>
        </section>
        <div>
            {
                data.PROJECTS.map((x, i) => {
                    return <Projects project={x} key={i} />
                })
            }
        </div>
    </div>
    )
}

const Box = (props) => {

    return (
        <Link activeClass='active' to={props.project.name} smooth={true} spy={true} duration={1000}>
            <div className='project-box'>{props.index + 1}</div>
        </Link>
    )
}
