// import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black bg-scroll bg-contain 
    overflow-auto m-auto h-screen w-screen">
      <header className="">
      <NavBar />
      </header>
          <Home />
          <About />
          <Projects />
          <Contact />
    </div>
  );
}

export default App;
