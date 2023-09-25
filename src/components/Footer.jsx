import React from 'react'

const currentDate = new Date()
const currentYear = currentDate.getFullYear();

export default function Footer(){
    return(
        <div id='footer-container'>
            <p>© {currentYear} Noah Spott</p>
        </div>
    )
}