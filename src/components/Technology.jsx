import React from 'react'

export default function Technology(props){
    return(
        <div id="technology-container">
            <span className={props.icon} id="technology-icon"></span>
            <p id="technology-name">{props.name}</p>
        </div>
    )
}