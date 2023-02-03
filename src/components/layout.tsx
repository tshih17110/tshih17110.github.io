import React, { useState, useEffect } from 'react'

import Stars from './stars'
import Header from './header'
import Intro from './intro'


import '../styles/layout.scss'

const Layout = ({ children }:{children:any}) => {
    // useEffect(() => {
    //     let delay = setTimeout(() => {
    //       clearTimeout(delay)
    //     }, 50)
    // })

    return (
        <div className="layout-container">
            <main>{children}</main>
            <Stars />
            <Header />
            <Intro />
        </div>
        
    )
}

export default Layout