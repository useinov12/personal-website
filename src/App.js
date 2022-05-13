import UpperPart from './components/UpperPart/UpperPart'
import LeftGroup from './components/UpperPart/LeftCircleGroup'
import RightGroup from './components/UpperPart/RightCircleGroup'
import AboutMe from './components/UpperPart/AboutMe'
import  LowerPart from './components/LowerPart/LowerPart'
import InfoSection from './components/LowerPart/InfoSection'


import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';


import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <UpperPart>
        <LeftGroup/>
        <RightGroup/>
        <AboutMe />

        <LowerPart>
          <InfoSection topic={'About Me'}>
            <p>I'm a self-thaught programmer from financial background. 
            Passionate about tech and web. 
            Exploring data visualization.
            </p>
          </InfoSection>
          <InfoSection topic={'My Tech Stack'}>
            <h2>Languages</h2>
            <section>
              <div>Javascript <SiJavascript/> </div>
              <div>Typescript <SiTypescript/> </div>
            </section>
            <h2>Frameworks & Liabriaries</h2>
            <section>
              <div>React <FaReact/> </div>
              <div>Next.JS  </div>
              <div>D3.JS  </div>
            </section>
            <h2>Databases</h2>
            <section>
              <div>MySQL</div>
              <div>MongoDB</div>
            </section>
          </InfoSection>
          <InfoSection topic={'My Projects'}></InfoSection>
        </LowerPart>

      </UpperPart> 
    </div>
  );
}

export default App;