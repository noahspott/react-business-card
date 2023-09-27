import React from 'react'
import Technology from './Technology'

export default function About(){
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
                    <div>
                        <h4>B.S. Software Engineering</h4>
                        <p>The Pennsylvania State University</p>
                        <p>Class of 2023</p>
                        <br></br>
                    </div>
                    <div>
                        <h4>A.A.S. Music Recording Technology</h4>
                        <p>Luzerne County Community College</p>
                        <p>Class of 2014</p>
                    </div>
                </div>

            </div>
        </div>
    )
}