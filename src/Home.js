import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rules from './Rules'; 
import { useGameState } from './GameStateContext';

function Home() {
  const navigate = useNavigate();
  const { gameRulesVisible, setGameRulesVisible } = useGameState(); 

  const navigateToGame = (difficulty) => {
    navigate(`/game/${difficulty}`);
  };

  return (
    <div>
      <h1>Welcome to Wordle Game!</h1>
      <div>
        <button onClick={() => navigateToGame('normal')}>Normal Difficulty</button>
      </div>
      <div>
        <button onClick={() => navigateToGame('hard')}>Hard Difficulty</button>
      </div>
      <div>
        <button onClick={() => navigate('/rules')}>Game Rules</button>
      </div>

       {/* nested components */}
       {gameRulesVisible && (
        <div>
          <h2>Game Rules Summary</h2>
          <Rules />
        </div>
      )}
    </div>
    
  );
}

export default Home;
