import React from 'react'
import { Link } from 'gatsby'

import Resume from '../static/resume.pdf'
import '../styles/header.scss'

const Header = () => {
    return (
        <header className='navbar'>
            <div className='links'>
                <a>About</a>
                <a className='resume' href={Resume}>Resume</a> 
                <a>Contact</a>   
            </div>
            
        </header>
    )
}

export default Header