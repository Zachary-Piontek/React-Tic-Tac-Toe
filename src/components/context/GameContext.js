import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const gameStart = new Array(9).fill().map((val, idx) => ({ space: idx, content: '' }));

  const [board, setBoard] = useState(gameStart);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`${currentPlayer}`);
  const [active, setActive] = useState(true);

  const resetGame = () => {
    setBoard(gameStart);
    setActive(true);
    setGameMessage(`${currentPlayer}`);
  };
  const changeSpace = (num) => {
    if (!active) return;
    if (board[num].content !== '') return;

    setBoard((prev) =>
      prev.map((box) => (box.space === num ? { space: num, content: currentPlayer } : box))
    );
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
    setGameMessage(`${nextPlayer}`);
  };

  const wins = () => {
    if (
      board[0].content !== '' &&
      board[0].content === board[1].content &&
      board[1].content === board[2].content
    ) {
      return board[2].content;
    } else if (
      board[3].content !== '' &&
      board[3].content === board[4].content &&
      board[4].content === board[5].content
    ) {
      return board[5].content;
    } else if (
      board[6].content !== '' &&
      board[6].content === board[7].content &&
      board[7].content === board[8].content
    ) {
      return board[8].content;
    } else if (
      board[0].content !== '' &&
      board[0].content === board[3].content &&
      board[3].content === board[6].content
    ) {
      return board[6].content;
    } else if (
      board[1].content !== '' &&
      board[1].content === board[4].content &&
      board[4].content === board[7].content
    ) {
      return board[7].content;
    } else if (
      board[2].content !== '' &&
      board[2].content === board[5].content &&
      board[5].content === board[8].content
    ) {
      return board[8].content;
    } else if (
      board[0].content !== '' &&
      board[0].content === board[4].content &&
      board[4].content === board[8].content
    ) {
      return board[8].content;
    } else if (
      board[2].content !== '' &&
      board[2].content === board[4].content &&
      board[4].content === board[6].content
    ) {
      return board[6].content;
    } else {
      return false;
    }
  };

  const tieGame = () => {
    return board.filter((space) => space.content === '').length === 0;
  };

  const checkGameplay = () => {
    if (!active) return;
    const winner = wins();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (tieGame()) {
      setGameMessage('Draw');
      setActive(false);
    }
  };

  checkGameplay();

  return (
    <GameContext.Provider
      value={{ board, setBoard, currentPlayer, setActive, changeSpace, gameMessage, resetGame, active }}
    >
      {children}
    </GameContext.Provider>
  );
  
};

export { GameContext, GameProvider };
