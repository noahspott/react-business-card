import React from 'react'
import noahPhoto from '../assets/noah-bust.jpg'

export default function Contact(){
    return(
        <div id='contact-background'>
            <section className='contact-container'>

                <div className='contact-button-section'>
                    <h1>Hi There, I Am Noah</h1>
                    <h1 id='contact-text'>Freelance Developer</h1>
                    <button id='contact-button'>CONTACT</button>
                </div>
    
                <img className='circle' src={noahPhoto} alt="Noah Photo" />
            
            </section>
        </div>
    )
}