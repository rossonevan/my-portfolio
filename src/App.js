import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="">
      <header className="">
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
