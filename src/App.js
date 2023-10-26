import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { WeatherInfo } from './pages/weatherInfo';
import { AstroInfo } from './pages/astroInfo';
import { LunarPhase } from './pages/lunarPhase';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/weather" element={<WeatherInfo />}/>
          <Route path="/astro" element={<AstroInfo />}/>
          <Route path="/lunar" element={<LunarPhase />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
