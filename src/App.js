import './App.css';
import Home from './components/Home';
import National from './components/National';
import Live from './components/Live';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

          {/* NAVBAR */}
          <nav>
            <div className="navbar">
              <Link to="/" id="link">Home</Link>
              <Link to="/national" id="link">National Parks</Link>
              <Link to="/live" id="link">Live Feeds</Link>
            </div>
          </nav>
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/national" element={<National />} />
            <Route exact path="/live" element={<Live />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
