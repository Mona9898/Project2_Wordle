import React from 'react';

function Rules() {
  return (
    <div>
      <h1>Game Rules</h1>
      <p>Welcome to Wordle! Here's how to play:</p>
      <ul>
        <li><strong>Objective:</strong> Guess the secret word within a limited number of attempts.</li>
        <li><strong>Word Length:</strong> Depending on the difficulty, the word will either be 6 letters (Normal) or 7 letters (Hard).</li>
        <li><strong>Number of Attempts:</strong> You have 6 attempts in Normal mode and 5 attempts in Hard mode to guess the word.</li>
        <li><strong>Entering Guesses:</strong> Type your guess into the input field and submit. The guess must match the length of the secret word.</li>
        <li><strong>Feedback:</strong> After each guess, the letters will be color-coded:
          <ul>
            <li>Green: The letter is in the word and in the correct position.</li>
            <li>Yellow: The letter is in the word but in the wrong position.</li>
            <li>Grey: The letter is not in the word.</li>
          </ul>
        </li>
        <li><strong>Winning:</strong> If you guess the word correctly within the allowed attempts, you win! A congratulatory message will be displayed.</li>
        <li><strong>Restarting the Game:</strong> After each game, you can choose to play again with the same difficulty level.</li>
      </ul>
    </div>
  );
}

export default Rules;
