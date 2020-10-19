import React from 'react'
import { Link } from 'react-scroll'

export default function Box(props){
    return(
            <Link activeClass='active' to={props.project.name} smooth={true} spy={true} duration={1000}>
                <div className='project-box'>{props.index + 1}</div>
            </Link>
    )
}