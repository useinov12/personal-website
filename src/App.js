import React, { useState, useEffect } from 'react'
import UpperPart from './components/UpperPart/UpperPart'
import LeftGroup from './components/UpperPart/LeftCircleGroup'
import RightGroup from './components/UpperPart/RightCircleGroup'
import AboutMe from './components/UpperPart/AboutMe'
import  LowerPart from './components/LowerPart/LowerPart'
import InfoSection from './components/LowerPart/InfoSection'
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import useWindowSize from './components/useWindowSize'
import './styles/index.scss'

function App() {
  const windowSize  = useWindowSize()
  const [ screenSize, setScreenSize ] =  useState(0)
  const [currentTopic, setCurrentTopic] = useState('projects')

  useEffect(() => {
    setScreenSize(windowSize.width)
  }, [windowSize])

  const renderTopic = (topic) => {
    if(!topic) return ( 
      <>
        <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'} topic={'About Me'}>
          <p>
            I'm a self-thaught programmer from financial background. 
            Passionate about tech and web. 
            Exploring data visualization.
          </p>
        </InfoSection>

        <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Tech Stack'}>
          <h4>Languages</h4>
          <section>
              <span className='section-item'>Javascript <SiJavascript className='stack-icons'/> </span>
              <span className='section-item'>Typescript <SiTypescript className='stack-icons'/> </span>
            </section>

            <h4>Frameworks & Liabriaries</h4>
            <section>
              <span  className='section-item'>React <FaReact className='stack-icons'/> </span>
              <span className='section-item'>Next.JS  </span>
              <span className='section-item'>D3.JS  </span>
            </section>

            <h4>Databases</h4>
            <section>
              <span className='section-item'> SQL <DiPostgresql className='stack-icons'/> </span>
              <span className='section-item'>MongoDB <DiMongodb className='stack-icons'/> </span>
            </section> 
        </InfoSection>

        <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Projects'}>
          <a href='https://algo-visualization.com/' target="_blank"> Algo-visialization </a>
        </InfoSection>
      </>);
    if(topic === 'about') return (
      <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'} topic={'About Me'}>
        <p>
          I'm a self-thaught programmer from financial background. 
          Passionate about tech and web. 
          Exploring data visualization.
        </p>
      </InfoSection>
    )
    if(topic === 'stack') return ( 
      <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Tech Stack'}>
          <h3>Languages</h3>
          <section>
            <div className='section-item'>Javascript <SiJavascript className='stack-icons'/> </div>
            <div className='section-item'>Typescript <SiTypescript className='stack-icons'/> </div>
          </section>

          <h3>Frameworks & Liabriaries</h3>
          <section>
            <div className='section-item'>React <FaReact className='stack-icons'/> </div>
            <div className='section-item'>Next.JS  </div>
            <div className='section-item'>D3.JS  </div>
          </section>

          <h3>Databases</h3>
          <section>
            <div className='section-item'> SQL <DiPostgresql className='stack-icons'/> </div>
            <div className='section-item'>MongoDB <DiMongodb className='stack-icons'/> </div>
          </section> 
      </InfoSection>
    )
    if(topic === 'projects') return (
      <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Projects'}>
        <a href='https://algo-visualization.com/' target="_blank"> Algo-visialization </a>
      </InfoSection>
    )
  }

  return (
    <div className="App">
      <UpperPart>
        <LeftGroup/>
        <RightGroup/>
        <AboutMe />
        <LowerPart className={screenSize <= 900 ? 'lower-part small-screen' : 'lower-part big-screen'}>
          { screenSize <=900  && (
            <nav className='small-screens-nav'>
              <button className={currentTopic === 'about' ? 'current' : ''} onClick={()=>setCurrentTopic('about')}>About Me</button>
              <button className={currentTopic === 'stack' ? 'current' : ''} onClick={()=>setCurrentTopic('stack')}>Tech Stack</button>
              <button className={currentTopic === 'projects' ? 'current' : ''} onClick={()=>setCurrentTopic('projects')}>My Projects</button>
            </nav>
          )}
          { screenSize <=900 &&  renderTopic(currentTopic) }
          { screenSize > 900 && renderTopic() }
        </LowerPart>
      </UpperPart> 
    </div>
  );
}

export default App;