import React from 'react'
import Portfolio from '../components/Portfolio/Portfolio';
import data from '../DATA';

export default function PortfolioRoute(){
    return(
        <Portfolio projects={data.PROJECTS}/>
    )
}