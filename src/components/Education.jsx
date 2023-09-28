import React from 'react'

export default function Education(props){
    const skillList = props.skills

    return(
        <div id="education-container">
            <h4>{props.degreeName}</h4>
            <p>{props.schoolName}</p>
            <p>Completed: {props.dateCompleted}</p>
            <ul>
                {skillList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}