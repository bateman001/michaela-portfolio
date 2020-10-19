import React from 'react';
import Projects from './Projects';
import Box from './Box'
import mandala from '../../styling/images/noun_Mandala_1112539.png'
import { Link } from 'react-router-dom'

export default function Portfolio(props){
console.log(props)
    return(
    <div className='portoflio'>
        <section className='portfolio-intro'>
            <div className='portfolio-bar'>
            <Link to='/portfolio'>
                <div className='project-box'><img src={mandala} alt='mandala'/></div>
            </Link>
                {props.projects.map((x, i) => {
                    return <Box key={i} index={i} project={x} />
                })}
            </div>      
        <div>
            {
                props.projects.map((x, i) => {
                    return <Projects project={x} key={i} />
                })
            }
        </div>
    </section>
    </div>
    )
}
