import React from 'react'
import Technology from './Technology'
import Education from './Education'

export default function About(){

    var lcccSkillList = 
    [
        "Live Sound", 
        "Music Production", 
        "Basic Electronics"
    ]

    var psuSkillList = 
    [
        "Programming Concepts", 
        "Software Development", 
        "Object Oriented Programming"
    ]

    return(
        <div id='about-container'>
            <div className='about-column'>
                <h2>TECHNOLOGIES</h2>
                <div>
                    <Technology 
                        name="React"
                        icon="devicons devicons-react"
                    />
                    <Technology 
                        name="JavaScript"
                        icon="devicons devicons-javascript_badge"
                    />
                    <Technology 
                        name="HTML5"
                        icon="devicons devicons-html5"
                    />
                    <Technology 
                        name="CSS"
                        icon="devicons devicons-css3"
                    />
                    <Technology 
                        name="Python"
                        icon="devicons devicons-python"
                    />
                    <Technology 
                        name="Git"
                        icon="devicons devicons-git"
                    />
                </div>
            </div>
            <div className='about-column' id='about-education'>
                <h3>EDUCATION</h3>
                <div>
                    <Education 
                        degreeName="B.S. Software Engineering"
                        schoolName="The Pennsylvania State University"
                        dateCompleted="12/2023"
                        skills={psuSkillList}
                    />
                    <Education 
                        degreeName="A.A.S. Music Recording"
                        schoolName="Luzerne County Community College"
                        dateCompleted="5/2014"
                        skills={lcccSkillList}
                    />
                </div>

            </div>
        </div>
    )
}