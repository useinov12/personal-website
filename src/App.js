import UpperPart from './components/UpperPart/UpperPart'
import AboutMe from './components/UpperPart/AboutMe'
import  CircleElementsGroup from './components/UpperPart/CircleElementsGroup'
import  LowerPart from './components/LowerPart/LowerPart'
import InfoSection from './components/LowerPart/InfoSection'

import './styles/index.scss'


function App() {
  return (
    <div className="App">
      <UpperPart/> 
      <LowerPart>
        <InfoSection></InfoSection>
        <InfoSection></InfoSection>
        <InfoSection></InfoSection>
      </LowerPart>
    </div>
  );
}

export default App;

