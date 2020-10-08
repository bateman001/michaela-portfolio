import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Waypoint } from 'react-waypoint'
import { animated, useTransition, config } from 'react-spring'

export default function ContactForm(){
    const [message, setMessage] = useState({})
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

    const changeMessage = (e) => {
        const {id, value} = e.target

        return setMessage({...message, [id]: value})
    }

    const sendEmail = (e) => {
        e.preventDefault()

        let templateParams = {
            subject: message.subject,
            from_name: message.name,
            message_html: message.message,
            user_email: message.email,
           }
      
           emailjs.init(process.env.REACT_APP_USER_ID);

           emailjs.send(
            'gmail',
             process.env.REACT_APP_TEMPLATE_ID,
             templateParams,
           ).then(res => res.status(200) ? resetForm() : alert('something went wrong'))

        }

    const resetForm = () => {
        return setMessage({})
    }

    return(
        <Waypoint onEnter={() => showForm(true)} onLeave={() => showForm(false)} bottomOffset='50px'>
        <div id='contact-form' className='contact-window overlay2'>

        {slideDown.map(({item, key, props}) => {
            return item && <animated.form key={key} style={props} onSubmit={(e) => sendEmail(e)}>

            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e) => changeMessage(e)} required/>

            <label htmlFor='email'>Email</label>
            <input type="email" id="email" onChange={(e) => changeMessage(e)} required/>

            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' onChange={(e) => changeMessage(e)} required/>

            <label htmlFor='message'>Message</label>
            <textarea id='message' onChange={(e) => changeMessage(e)} required/>

            <input className='submit' type='submit' value='send' />
        </animated.form>  
        })}
      
        </div>
        </Waypoint>
    )
}