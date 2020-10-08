import React from 'react'
import Footer from '../components/Footer/Footer';
import MobileFooter from '../components/Footer/MobileFooter'
import ContactForm from '../components/Footer/ContactForm'
import withSizes from 'react-sizes'

function Contact({ isMobile }) {
    return(
        <>
        {isMobile ? <MobileFooter /> : <Footer />}
        <ContactForm />
        </>
    )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 600,
  })
  
  export default withSizes(mapSizesToProps)(Contact)
