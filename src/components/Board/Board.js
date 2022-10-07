import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './board.css';
import Box from '../Box/Box';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div className='board'>
      {board.map(({ space, content }) => (
        <Box key={space} space={space} content={content} />
      ))}
    </div>
  );
}