import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';








function AboutMe() {
    const [position, setPosition ] = useState(0)
    const styles = { transform:`translateY(-${position}px)`}

    useEffect(() => {
        let timerId
        if(position >= 108) timerId = setInterval( ()=>setPosition(0), 1000);
        else timerId = setInterval( ()=>setPosition(p => p+36), 1000);
        return ()=>  clearInterval(timerId)
    }, [position])


    return (
        <div className='about-me-info'>

        
            <div className='img-container'>
                <img/>
            </div>
            <div>Ruslan</div>

            <b className='porfessional-info slide-vertical'>
                <span style={styles}>
                    <div>Web Developement</div>
                    <div>Data Visualization</div>
                    <div>Front-End</div>
                    <div>UI Design</div>
                </span>
            </b>

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
