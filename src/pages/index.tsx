import React from 'react'
import ReactDOM from 'react-dom'
import type { PageProps } from 'gatsby'

import '../styles/index.scss'
import ParticlesContainer from '../components/particles'
import Layout from '../components/layout'


const IndexPage = ({ children }:{children:any}) => {
    return (     
        
        <Layout>
            <title>Thomas Shih</title>
        </Layout>
    )
} 

export default IndexPage