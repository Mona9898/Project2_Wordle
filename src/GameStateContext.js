import React, { createContext, useState, useContext } from 'react';

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('normal');
  const [attempts, setAttempts] = useState(6); // 默认为普通模式的尝试次数

  const value = {
    difficulty,
    setDifficulty,
    attempts,
    setAttempts
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};
