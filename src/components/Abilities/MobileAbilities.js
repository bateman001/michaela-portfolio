import React from 'react'

export default function MobileAbilities(props){

       return(
           <>
            <ul className='tech-window overlay1'>
                {props.selected !== null ? 
                    props.techStack(props.selected) : 
                    <div className='tech-description'>
                        <p>Consistently Improving</p>
                        <p>Continuously Evolving</p>
                    </div>
                }
            </ul>
           </>
    )
}

