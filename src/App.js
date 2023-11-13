import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameStateProvider } from './GameStateContext';
import Home from './Home';
import Game from './Game';
import Rules from './Rules';
import Navbar from './Navbar'; 

function App() {
  return (
    <GameStateProvider>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:difficulty" element={<Game title="Wordle Game" />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </GameStateProvider>
  );
}

export default App;
