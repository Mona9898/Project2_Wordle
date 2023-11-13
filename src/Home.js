import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToGame = (difficulty) => {
    navigate(`/game/${difficulty}`);
  };

  return (
    <div>
      <h1>Welcome to Wordle Game</h1>
      <div>
        <button onClick={() => navigateToGame('normal')}>Play Normal Difficulty</button>
        <button onClick={() => navigateToGame('hard')}>Play Hard Difficulty</button>
      </div>
      <div>
        <button onClick={() => navigate('/rules')}>Game Rules</button>
      </div>
    </div>
  );
}

export default Home;
