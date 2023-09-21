import React from 'react'

export default function Header(){
    return(
        <>
            <nav className='header--nav'>
                <h3 className='header--name'>NOAH SPOTT</h3>
                <div id='header-container-logo'>
                    <img className='header-logo' src="src/assets/li-logo.png" alt="LinkedIn Logo" />
                    <img className='header-logo' src="src/assets/github-mark-white.png" alt="GitHub Logo" />
                </div>
            </nav>
        </>
    )
}