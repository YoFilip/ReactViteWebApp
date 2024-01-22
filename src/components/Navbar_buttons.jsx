import React from 'react'
import CV_PL from '../assets/CV-PL.pdf'
import CV_ENG from '../assets/CV-ENG.pdf'

function Navbar_buttons() {
    return (
        <div className='download-buttons'>
            <a href={CV_PL} className='download-button text' download="CV_PL.pdf">
                Download CV PL
            </a>
            <a href={CV_ENG} className='download-button text' download="CV_ENG.pdf">
                Download CV ENG
            </a>
        </div>
    )
}

export default Navbar_buttons