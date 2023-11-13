import React, { createContext, useState, useContext } from 'react';

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('normal');
  const [attempts, setAttempts] = useState(6);
  const [currentGuesses, setCurrentGuesses] = useState([]);
  const [gameRulesVisible, setGameRulesVisible] = useState(false); 
  const [gameResult, setGameResult] = useState(null); 

  const value = {
    difficulty,
    setDifficulty,
    attempts,
    setAttempts,
    currentGuesses,
    setCurrentGuesses,
    gameRulesVisible,
    setGameRulesVisible,
    gameResult, 
    setGameResult,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};
