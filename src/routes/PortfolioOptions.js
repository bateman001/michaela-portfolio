import React from 'react'

export default function PortfolioOptions(props){
    return(
    <div className='portfolio-container'>
        <div id='portfolio-img' className='portfolio-img my-pic'>
            <div className='portfolio-text'>
                <h1>My Portfolio</h1>
                <p>See what I'm made of</p>                
            </div>
        </div>

        <section className='portfolio-options'>
        <div className='projects' onClick={() => props.history.push('/portfolio/personal')}>
            <h3>Personal Projects</h3>
        </div>
        <div className='projects' onClick={() => props.history.push('/portfolio/freelance')}> 
            <h3>Freelance Projects</h3>
        </div>
        </section>
    </div>
    )
}