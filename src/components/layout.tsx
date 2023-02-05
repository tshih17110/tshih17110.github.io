import React, { useState, useEffect } from 'react';

import Stars from './stars';
import Header from './header';
import Intro from './intro';
import Footer from './footer';

import '../styles/layout.scss';

const Layout = ({ children }:{children:any}) => {
    return (
        <div className='layout-container'>
            <main>{children}</main>
            <Stars />    
            <Header />
            <Intro />
            <Footer />
        </div>
        
    )
}

export default Layout