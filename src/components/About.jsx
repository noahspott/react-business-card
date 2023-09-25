import React from 'react'

export default function About(){
    return(
        <div id='about-container'>
            <div className='about-column'>
                <h2>TECHNOLOGIES</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C / C++</li>
                    <li>Git</li>
                </ul>
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