import React from 'react'
import withSizes from 'react-sizes'

import MobileHeader from '../components/AboutMe/MobileHeader'
import Header from '../components/AboutMe/Header'
import Abilities from '../components/Abilities/Abilities'

function Intro({ isMobile }){
    return(
      <>    
      {isMobile ? <MobileHeader /> : <Header />}
       <Abilities /> 
    </>
    
    )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(Intro)
