import React from 'react';
import Reveal from 'react-reveal/Reveal';
//import { useSpring, animated, config } from 'react-spring';

const TechList = (props) => {
    
        
        return <Reveal effect="grow">
        <li key={props.index}>
            <div className={`bar ${props.name}`}>{props.name}</div>
        </li>
         </Reveal>
    
}

export default TechList;