import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export default function Box({ box }) {
  const { area, board } = useContext(GameContext);
  function Click() {
    area(board);
  }

  return (
    <div>
      <button onClick={Click}>{board[box]}</button>
    </div>
  );

}