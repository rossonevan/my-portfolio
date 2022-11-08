import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-gradient-to-b from-red-500 to-black bg-scroll bg-contain 
    overflow-auto m-auto h-screen w-screen">
      <header className="bg-gradient-to-br from-black to-gray-700">
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/me'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
