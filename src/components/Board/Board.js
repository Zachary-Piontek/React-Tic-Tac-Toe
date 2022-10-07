import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './board.css';
import Box from '../Box/Box';

export default function Board() {
  const { board, gameMessage, resetGame, active } = useContext(GameContext);

  return (
    <>
      <div>
        {!active && <button onClick={resetGame}>Play Again</button>}
        <h3>Your turn {gameMessage}</h3>
      </div>
      <div className='board'>
        {board.map(({ space, content }) => (
          <Box key={space} space={space} content={content} />
        ))}
      </div>
    </>
  );
}