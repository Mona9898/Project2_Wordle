import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// word list
const wordLists = {
  normal: ['apple', 'happy', 'sweet', 'react', 'world', 'peace', 'dream', 'light', 'music', 'space'],
  hard: ['complex', 'reactor', 'flamingo', 'notebook', 'keyboard', 'dolphin', 'phantom', 'gallery', 'journey', 'captain']
};

function Game() {
  const [secretWord, setSecretWord] = useState('');
  const [guess, setGuess] = useState('');
  const [clue, setClue] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const { difficulty } = useParams();
  const navigate = useNavigate();

  // choose a new word
  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const resetGame = () => {
    const words = wordLists[difficulty];
    const word = words[Math.floor(Math.random() * words.length)];
    setSecretWord(word);
    setGuess('');
    setClue([]);
    setGameWon(false);
  };

  // handle Input Change
  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  // handle Submit
  const handleSubmit = () => {
    if (guess.toLowerCase() === secretWord) {
      setGameWon(true); 
    } else {
      let newClue = guess.split('').map((char, index) => {
        if (secretWord[index] === char) {
          return <span style={{ color: 'green' }}>{char}</span>;
        } else if (secretWord.includes(char)) {
          return <span style={{ color: 'yellow' }}>{char}</span>;
        } else {
          return <span style={{ color: 'grey' }}>{char}</span>;
        }
      });
      setClue(newClue);
    }
  };

  return (
    <div>
      <h1>Wordle Game - {difficulty === 'normal' ? 'normal' : 'hard'} difficulty</h1>
      {gameWon ? (
        <div>
          <p>Congratulations！</p>
          <button onClick={resetGame}>Would you like to try again?</button>
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            value={guess} 
            onChange={handleInputChange} 
            placeholder="write your guess" 
          />
          <button onClick={handleSubmit}>Submit</button>
          <div>{clue}</div>
        </div>
      )}
    </div>
  );
}

export default Game;
