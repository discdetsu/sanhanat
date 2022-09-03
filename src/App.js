import './App.css';
import Particles from "./Components/Particles";
import Header from './Components/Header/Header';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <Particles className='particles' id="tsparticles" />
      <Header />
      <Experiences />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
