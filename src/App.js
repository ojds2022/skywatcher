import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { WeatherAndAstroInfo } from './pages/weatherAndAstroInfo';
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
          <Route path="/astro" element={<WeatherAndAstroInfo />}/>
          <Route path="/lunar" element={<LunarPhase />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
