import React, { useState } from 'react';
import { useSpring, animated, useTransition} from 'react-spring';
import { Waypoint } from 'react-waypoint'
import { IoIosClose } from 'react-icons/io'
export default function Modal(props){
    const [visible, setVisible] = useState(false)
    const [open, set] = useState(false)
    const list = {
                description: props.description,
                tech: props.tech,
                repo: props.repo,
                live: props.live
            }
        
    const animate = useSpring({
        opacity: visible ? 1 : 0,
    })
        
    const slide = useTransition(open, null, {
        from: {
            opacity: 0,
            transform: 'translate3d(0, 600px,0)'
        },
        
        enter: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        
        leave: {
            opacity: 0,
            transform: 'translate3d(0, 600px,0)'
        },
        
    })

    const showInfo = () => {
        set(!open)
    }

    const visibility = () => {
        setVisible(!visible)
    }

    return(
        <div>
        <div className='modal'>
        <Waypoint onEnter={visibility} onLeave={visibility} bottomOffset='100px'>
            <animated.div 
            style={animate} 
            className='modal-button' 
            onClick={() => showInfo()}
            key={props.i}>                    
                <p>About This App</p>
            </animated.div>
        </Waypoint>
        </div>
        {slide.map(
            ({item, key, props}) => {
                return item && <animated.div key={key} style={props} className='slide-up'>
                    <SlideUp list={list} showInfo={showInfo}/>
                </animated.div>
            }
        )}
        </div>
    )
}

const SlideUp = (props) => {
   return (
       <div className='slide-up-modal'>
        <IoIosClose className='close-icon' onClick={() => props.showInfo()} />
        <div className='slide-up-par'>
            <a href={props.list.repo} target='_blank' rel="noopener noreferrer">Repo</a> / <a href={props.list.live} target='_blank' rel="noopener noreferrer">Live</a>
        </div>
        <p>{props.list.description}</p>
        <ul className='slide-up-list'>
            <li><h3>Tech</h3></li>
            {props.list.tech.map((x, i) => {
                return <li key={i}>{x}</li>
            })}
        </ul>
       </div>
   )
}
