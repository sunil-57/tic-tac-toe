import React, { useEffect, useState } from 'react'

import Square from './square/Square'

import "./App.css"

const renderFrom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const App = () => {
  const [gameState, setGameState] = useState(renderFrom);
  const [currentPlayer, setCurrentPlayer] = useState('circle');
  const [finishedState, setFinishedState] = useState(false);
  const checkWinner = () => {
    //checking winner with row
    for (let row = 0; row < gameState.length; row++) {
      if (gameState[row][0] === gameState[row][1] && gameState[row][1] === gameState[row][2]) {
        return gameState[row][0];
      }
    }
    //checking winner with column
    for (let col = 0; col < gameState.length; col++) {
      if (gameState[0][col] === gameState[1][col] && gameState[1][col] === gameState[2][col]) {
        return gameState[0][col];
      }
    }
    //checking winner at the diagonals
    if (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) {
      return gameState[0][0];
    }
    if (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) {
      return gameState[0][2];
    }

    //check a draw 
    const isDrawMatch = gameState.flat().every((e) => {
      if (e === "circle" || e === "cross") {
        return true;
      }
    });

    if (isDrawMatch) return 'draw';

    return null
  }
  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      setFinishedState(winner);
    }

  }, [gameState])
  return (
    <div className="main-container">
      <div>
        <div className='move-detect'>
          <div className="left">Player 1</div>
          <div className="right">Player 2</div>
        </div>
        <h1 className='game-title game-container'>Tic Tac Toe</h1>
        <div className="square-wrapper">
          {gameState.map((arr, rowIndex) => arr.map((e, colIndex) => {
            return <Square id={rowIndex * 3 + colIndex} key={rowIndex * 3 + colIndex}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              setGameState={setGameState}
              finishedState={finishedState} />;
          }))}
        </div>
        {
          finishedState && finishedState !== 'draw' &&(
            <h3 className='finished-State'>{finishedState} won the Game</h3>
          )
        }
        {
          finishedState && finishedState === 'draw' && (
            <>  <h3 className='finished-State'>Play more tricks,</h3>
            <h3 className='finished-State'>Its a draw!!🤣</h3>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App
