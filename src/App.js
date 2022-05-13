import UpperPart from './components/UpperPart/UpperPart'
import LeftGroup from './components/UpperPart/LeftCircleGroup'
import RightGroup from './components/UpperPart/RightCircleGroup'
import AboutMe from './components/UpperPart/AboutMe'
import  LowerPart from './components/LowerPart/LowerPart'
import InfoSection from './components/LowerPart/InfoSection'

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
          <InfoSection topic={'My Stack'}>
          
          </InfoSection>
          <InfoSection topic={'My Projects'}></InfoSection>
        </LowerPart>

      </UpperPart> 
    </div>
  );
}

export default App;

// <LowerPart>
// <InfoSection topic={'About Me'}>

// </InfoSection>
// <InfoSection topic={'My Stack'}>

// </InfoSection>
// <InfoSection topic={'My Projects'}>

// </InfoSection>
// </LowerPart>