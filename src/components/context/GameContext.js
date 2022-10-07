import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    
  const [gameBoard, setGameBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState('True');
  const [gameMessage, setGameMessage] = ('');

  return (
    <GameContext.Provider value={{ gameBoard, setGameBoard, currentPlayer, setCurrentPlayer, active, setActive, gameMessage, setGameMessage }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };