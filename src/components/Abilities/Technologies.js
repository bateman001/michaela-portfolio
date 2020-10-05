import React from 'react';
import TechList from './TechList';

const Technologies = (props) => {
    
    const skills = () => {
        return props.skillset.map((skill, index) => {
            return <TechList 
                key={index}
                index={index}
                name={skill}
            />
        })
    }

        return(
            <ul>
                <h2>{props.title}</h2>
                {skills()}
            </ul>
        )
}

export default Technologies;