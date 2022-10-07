import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export default function Box({ box, content }) {
  const { update } = useContext(GameContext);
  return (
    <div onClick={() => update(box)} id={box}>
      {content}
    </div>
  );

}