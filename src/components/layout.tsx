import React, { useState, useEffect } from 'react'

import Header from './header'
import ParticlesContainer from './particles'
import Stars from './stars'

import '../styles/layout.scss'

const Layout = ({ children }:{children:any}) => {

    return (
        // <Stars />
        <div className="layout-container">
            <main>{children}</main>
            <Stars />
            <Header />
        </div>
        
    )
}

export default Layout