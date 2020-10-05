import React, { useState } from 'react';
import withSizes from 'react-sizes';

import data from '../../DATA'
import MobileAbilities from './MobileAbilities';

const Abilities = ({ isMobile }) => {
    const [selected, setSelected] = useState(null)

    const techStack = (type) => {
            const index = data.techSkills.findIndex((x) => x.stackType === type)
            return data.techSkills[index].stack.map((x, i) => {
                return <AboutMyTech key={i} tech={x} />
        })
    }

    return(
        <section className='tech-bars'>
            <section>
                <h1>My Tech</h1>
            </section>

            {isMobile ? <MobileAbilities selected={selected} techStack={techStack}/>  : <DesktopWindow techStack={techStack} selected={selected}/>}

            <div className='tech'>
            {data.techSkills.map((x, i) => {
                return <Buttons key={i} skill={x} selected={selected} setSelected={setSelected}/>
            })}
            </div>

        </section>
        
        )
    }
    
const Buttons = (props) => {

    const toggleSelected = (type) => {
        if(props.selected === type){
            return props.setSelected(null)
        }

        return props.setSelected(type)
    }
    return (
    <button className='tech-buttons' onClick={() => toggleSelected(props.skill.stackType)}>{props.skill.stackType}</button>
    )
}

const AboutMyTech = (props) => {
    return(
        <li>{props.tech}</li>
    )
}

const DesktopWindow = (props) => {
    return(
    <div className='flex'>
    <div className='tech-window overlay1'></div>
    <ul className='tech-list'>
        {props.selected !== null ? 
            props.techStack(props.selected) : 
            <div className='tech-description'>
                <p>Consistently Improving</p>
                <p>Continuously Evolving</p>
            </div>
        }
    </ul>
    </div>
)
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 600,
})
  
export default withSizes(mapSizesToProps)(Abilities)
  