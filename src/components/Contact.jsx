import React from 'react'
import noahPhoto from '../assets/noah-bust.jpg'
import ContactForm from './ContactForm'


export default function Contact(){
    return(
        <div id='contact-background'>
            <section className='contact-container'>

                <div className='contact-button-section'>
                    <h1>Hi there, I'm Noah</h1>
                    <h1 id='contact-text'>Freelance Developer</h1>
                </div>
    
                <img className='circle' src={noahPhoto} alt="Noah Photo" />
            
            </section>

            {/* <ContactForm /> */}
        </div>
    )
}