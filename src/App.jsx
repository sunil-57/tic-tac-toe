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
    for(let row = 0; row < gameState.length; row++){
      if(gameState[row][0] === gameState[row][1] && gameState[row][1] === gameState[row][2]){
        return gameState[row][0];
      }
    }
    //checking winner with colum
    for(let col = 0; col < gameState.length; col++){
      if(gameState[0][col] === gameState[1][col] && gameState[1][col] === gameState[2][col]){
        return gameState[0][col];
      }
    }
  }
  useEffect( () => {
    console.log(checkWinner());
    const winner = checkWinner();
    if(winner === 'circle' || winner === 'cross'){
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
            return <Square id = {rowIndex * 3 + colIndex} key={rowIndex * 3 + colIndex}
                currentPlayer = {currentPlayer} 
                setCurrentPlayer = {setCurrentPlayer}
                setGameState={setGameState}
                setFinishedState = {setFinishedState}
                finishedState = {finishedState} />;
          }))}
          
        </div>
      </div>
    </div>
  )
}

export default App
