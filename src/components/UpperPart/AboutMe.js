import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function AboutMe() {
    return (
        <div className='about-me-info'>
            <div className='img-container'>
                <img/>
            </div>

            <div>Ruslan</div>

            {/*<b className='porfessional-info slide-vertical'>
                <span >
                    <div>Web Developement</div>
                    <div>Data Visualization</div>
                    <div>Front-End</div>
                    <div>UI Design</div>
                </span>
            </b> */}
            <span >Web Developement</span>


            <div className='contact-info-container'>
                <b>Contacts</b>
                <div>
                    <FaGithub/>
                    <FaLinkedin/>
                    <SiGmail/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
