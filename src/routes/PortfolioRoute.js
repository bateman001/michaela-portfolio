import React from 'react'
import Portfolio from '../components/Portfolio/Portfolio';
import data from '../DATA';

export default function PortfolioRoute(props){

    const projects = data[props.id]
    return(
        <Portfolio projects={projects}/>
    )
}