import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import Fader from './components/Fader';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/news">
    <News/>
    </Route>
    <Route path="/about">
    <About/>
    </Route>
    <Route path="/contact">
    <Contact/>
    </Route>

    <Fader/>
   

    </Switch>
    </BrowserRouter>
       </div>
  );
}

export default App;
