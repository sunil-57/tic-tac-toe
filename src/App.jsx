import React, { useState } from 'react'

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



  return (
    <div className="main-container">
      <div>
        <div className='move-detect'>
            <div className="left">Player 1</div>
            <div className="right">Player 2</div>
        </div>
        <h1 className='game-title game-container'>Tic Tac Toe</h1>
        <div className="square-wrapper">
          {gameState.map((arr) => arr.map((e) => {
            return <Square id={e} key={e}
                currentPlayer = {currentPlayer} 
                setCurrentPlayer = {setCurrentPlayer}
                setGameState={setGameState} />;
          }))}
          
        </div>
      </div>
    </div>
  )
}

export default App
