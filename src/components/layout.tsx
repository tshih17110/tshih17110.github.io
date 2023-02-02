import React, { useState, useEffect } from 'react'

import Header from './header'
import ParticlesContainer from './particles'

import '../styles/layout.scss'

const Layout = ({ children }:{children:any}) => {
    return (
        <div className="layout-container">
            <div className="particle-container">
                <ParticlesContainer />    
            </div>
            <Header />
            
                {/* <main>{children}</main>    */}
        </div>
        
    )
}

export default Layout