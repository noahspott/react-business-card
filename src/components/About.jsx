import React from 'react'
import Technology from './Technology'
import Education from './Education'
import data from '../data'

export default function About(){

    const technologyElements = data.technology.map((tech) =>
        <Technology {...tech}/>
    )

    const educationElements = data.education.map((edu) =>
        <Education {...edu}/>
    )

    return(
        <div id='about-container'>
            <div className='about-column'>
                <h2>TECHNOLOGIES</h2>
                <div>
                    {technologyElements}
                </div>
            </div>
            <div className='about-column' id='about-education'>
                <h3>EDUCATION</h3>
                <div>
                    {educationElements}
                </div>
            </div>
        </div>
    )
}