import React, { useState } from 'react';
import Modal from './Modal';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint'

export default function Projects(props){
    const [on, toggle] = useState(false)

    const animate = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%, 0, 0)',
        config: config.molasses
    })

    return(
            <Waypoint onEnter={() => toggle(!on)} onLeave={() => toggle(!on)} topOffset='100px' bottomOffset='100px' >
            <animated.div id={props.project.name} style={animate} className='portfolio-projects'>
                <img src={props.project.url} alt={props.project.name} />
                <Modal 
                        name={props.project.name}
                        tech={props.project.tech}
                        description={props.project.description}
                        live={props.project.live}
                        repo={props.project.repo}
                    />
            </animated.div>
            </Waypoint>
        )
    }
