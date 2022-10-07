import { useContext } from 'react';
import Box from '../Box/Box';
import { GameContext } from '../context/GameContext';


export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div>
      {board.map(({ box, content }) => (
        <Box key={content} content={content} box={box} />))}
    </div>
  );
}