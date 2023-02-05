import React from 'react';
import '../styles/footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub, AiFillGithub } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import GithubLogo from './icons/github';
import LinkedinLogo from './icons/linkedin';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="logo-links">
                    <a className='github-link' href='https:/github.com/tshih17110' target='_blank'>
                        <IconContext.Provider value={{size: '36px', className: 'github-logo'}}>
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                    <a className='linkedin-link' href='https://linkedin.com/in/thomas-shih-105674184' target='_blank'>
                        <IconContext.Provider value={{size: '36px',className: 'linkedin-logo'}}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </a>                    
                </div>

                



                <p>Built by Thomas Shih | 2023</p>    
            </div>
        </footer>
   
    )
}

export default Footer