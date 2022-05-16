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


  useEffect(() => {
    setScreenSize(windowSize.width)

  }, [windowSize])

  const [currentTopic, setCurrentTopic] = useState('About Me')




  const renderTopic = (topic) => {

    if(!topic) return (<>
        <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'} topic={'About Me'}>
          <p>
            I'm a self-thaught programmer from financial background. 
            Passionate about tech and web. 
            Exploring data visualization.
          </p>
        </InfoSection>

      <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Tech Stack'}>
        <div>
          <h2>Languages</h2>
          <section>
            <div>Javascript <SiJavascript className='stack-icons'/> </div>
            <div>Typescript <SiTypescript className='stack-icons'/> </div>
          </section>

          <h2>Frameworks & Liabriaries</h2>
          <section>
            <div>React <FaReact className='stack-icons'/> </div>
            <div>Next.JS  </div>
            <div>D3.JS  </div>
          </section>

          <h2>Databases</h2>
          <section>
            <div> SQL <DiPostgresql className='stack-icons'/> </div>
            <div>MongoDB <DiMongodb className='stack-icons'/> </div>
          </section> 
        </div>
      </InfoSection>

        <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Projects'}>
          <a>Algo-visialization</a>
        </InfoSection>
      </>)
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
        <div>
          <h2>Languages</h2>
          <section>
            <div>Javascript <SiJavascript className='stack-icons'/> </div>
            <div>Typescript <SiTypescript className='stack-icons'/> </div>
          </section>

          <h2>Frameworks & Liabriaries</h2>
          <section>
            <div>React <FaReact className='stack-icons'/> </div>
            <div>Next.JS  </div>
            <div>D3.JS  </div>
          </section>

          <h2>Databases</h2>
          <section>
            <div> SQL <DiPostgresql className='stack-icons'/> </div>
            <div>MongoDB <DiMongodb className='stack-icons'/> </div>
          </section> 
        </div>
      </InfoSection>
    )
    if(topic === 'projects') return (
      <InfoSection className={screenSize <= 900 ?  'info-section small-screen' : 'info-section big-screen'}  topic={'Projects'}>
        <a>Algo-visialization</a>
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
          {screenSize <=900  && (
            <nav className='small-screens-nav'>
              <button onClick={()=>setCurrentTopic('about')}>About Me</button>
              <button onClick={()=>setCurrentTopic('stack')}>Tech Stack</button>
              <button onCLick={()=>setCurrentTopic('projects')}>My Projects</button>
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



// <InfoSection topic={'About Me'}>
// <p>I'm a self-thaught programmer from financial background. 
// Passionate about tech and web. 
// Exploring data visualization.
// </p>
// </InfoSection>

// <InfoSection topic={'My Tech Stack'}>

// <h2>Languages</h2>
// <section>
//   <div>Javascript <SiJavascript/> </div>
//   <div>Typescript <SiTypescript/> </div>
// </section>

// <h2>Frameworks & Liabriaries</h2>
// <section>
//   <div>React <FaReact/> </div>
//   <div>Next.JS  </div>
//   <div>D3.JS  </div>
// </section>

// <h2>Databases</h2>
// <section>
//   <div>MySQL</div>
//   <div>MongoDB</div>
// </section>

// </InfoSection>


// <InfoSection topic={'My Projects'}>
// <a >Algo-visialization</a>
// </InfoSection>