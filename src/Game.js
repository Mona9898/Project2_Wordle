import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameState } from './GameStateContext';
import { isWordValid } from './api'; 

const wordLists = {
  normal: ['apple', 'happy', 'sweet', 'react', 'world', 'peace', 'dream', 'light', 'music', 'space'],
  hard: ['abandon', 'balance', 'cabinet', 'deliver', 'eastern', 'factory', 'gallery', 'harmony', 'insight', 'journey']
};

function Game({ title }) {
  const [secretWord, setSecretWord] = useState('');
  const [guess, setGuess] = useState('');
  const [clue, setClue] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const { difficulty } = useParams();
  const navigate = useNavigate();

  const { setGameResult } = useGameState();

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
    setGameOver(false);
    setMessage('');
    setAttemptsLeft(difficulty === 'normal' ? 6 : 5);
  };

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = async () => {
    if (guess.length !== secretWord.length) {
      setMessage(`The word must be ${secretWord.length} letters long.`);
      return;
    }

    const isValid = await isWordValid(guess);

    if (!isValid) {
      setMessage(`"${guess}" is not a valid English word. Please enter a valid word.`);
      return;
    }

    if (guess.toLowerCase() === secretWord) {
      setGameWon(true);
      setGameResult(true);
    } else {
      let newClue = guess.split('').map((char, index) => {
        if (char === secretWord[index]) {
          return <span style={{ color: 'green' }}>{char}</span>;
        } else if (secretWord.includes(char)) {
          return <span style={{ color: 'yellow' }}>{char}</span>;
        } else {
          return <span style={{ color: 'grey' }}>{char}</span>;
        }
      });
      setClue(newClue);
      setMessage('');
      setAttemptsLeft(attemptsLeft - 1);

      if (attemptsLeft - 1 === 0) {
        setGameOver(true);
        setGameResult(false);
      }
    }
  };

  const handleTryAgain = () => {
    resetGame();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>{title} - {difficulty === 'normal' ? 'Normal' : 'Hard'} Difficulty</h1>
      <p>Attempts left: {attemptsLeft}</p>
      {gameWon ? (
        <div>
          <p>Congratulations! Would you like to try again?</p>
          <button onClick={handleTryAgain}>Try Again</button>
        </div>
      ) : gameOver ? (
        <div>
          <p>You lose! The correct word was {secretWord}.</p>
          <button onClick={handleTryAgain}>Try Again</button>
          <button onClick={handleGoHome}>Go Home</button>
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            value={guess} 
            onChange={handleInputChange} 
            placeholder={`Enter a ${secretWord.length}-letter word`} 
          />
          <button onClick={handleSubmit}>Submit</button>
          <div>{clue}</div>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Game;