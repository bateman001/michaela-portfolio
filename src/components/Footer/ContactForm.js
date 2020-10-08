import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Waypoint } from 'react-waypoint'
import { animated, useTransition, config } from 'react-spring'

export default function ContactForm(){
    const [form, showForm] = useState(false)

    const slideDown = useTransition(form, null, {
        from: {
            opacity: 0,
            transform: 'translate3d(0, -600px,0)'
        },
        
        enter: {
            opacity: 1,
            transform: 'translate3d(0,0,0)',
            delay: 2000,
        },
        
        leave: {
            opacity: 0,
            transform: 'translate3d(0, -600px,0)'
        },
        config: config.slow
    })


    const sendEmail = (e) => {
        e.preventDefault()
      
           emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
           .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
        }

    return(
        <Waypoint onEnter={() => showForm(true)} onLeave={() => showForm(false)} bottomOffset='50px'>
        <div id='contact-form' className='contact-window overlay2'>

        {slideDown.map(({item, key, props}) => {
            return item && <animated.form key={key} style={props} onSubmit={(e) => sendEmail(e)}>

            <label htmlFor='from_name'>Name</label>
            <input type='text' name='from_name' required/>

            <label htmlFor='user_email'>Email</label>
            <input type="email" name="user_email" required/>

            <label htmlFor='subject'>Subject</label>
            <input type='text' name='subject' required/>

            <label htmlFor='message_html'>Message</label>
            <textarea name='message_html' required/>

            <input className='submit' type='submit' value='send' />
        </animated.form>  
        })}
      
        </div>
        </Waypoint>
    )
}