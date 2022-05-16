import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ContactForm from '../Contact/index'

function AboutMe() {
    const [contactFormIsOpen, setContactFormIsOpen ] = useState(false)

    const handleCloseForm = ( ) => { setContactFormIsOpen(p=>!p)}
    return (
        <div className='about-me-info'>
            <div>Ruslan</div>
            <b className='porfessional-info slide-vertical'>
                {<span className='rotation-container'>
                    <div>Web Developement</div>
                    <div>Data Visualization</div>
                    <div>Front-End</div>
                    <div>UI Design</div>
                </span>}
            </b>

            <div className='contact-info-container'>
                <h3>Contacts</h3>
                <div className='social-links'>
                    <a href='https://www.linkedin.com/in/ruslan-useinov-330b5a23a/' target="_blank" className='contact-link'>
                        <FaLinkedin className='contacts-icon'/>
                    </a>
                    <a href='https://github.com/ruslaaaan' target="_blank" className='contact-link'>
                        <FaGithub className='contacts-icon'/>
                    </a>
                    <a onClick={()=>setContactFormIsOpen(!contactFormIsOpen)} className='contact-link'>
                        <SiGmail className='contacts-icon'/>
                    </a>
                </div>
            </div>
            <ContactForm 
                handleCloseForm={handleCloseForm} 
                contactFormIsOpen={contactFormIsOpen}
            />
        </div>
    )
}

export default AboutMe
