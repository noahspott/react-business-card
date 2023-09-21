import React from 'react'

export default function Header(){
    return(
        <>
            <nav className='header-nav'>
                <h3 className='header-name'>NOAH SPOTT</h3>
                <div id='header-container-logo'>
                    <a href="https://www.linkedin.com/in/noahspott/">
                        <img href='' className='header-logo' src="src/assets/li-logo.png" alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/noahspott">
                        <img className='header-logo' src="src/assets/github-mark-white.png" alt="GitHub Logo" />
                    </a>
                </div>
            </nav>
        </>
    )
}