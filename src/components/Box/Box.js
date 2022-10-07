import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './box.css';

export default function Box({ space, content }) {
  const { update } = useContext(GameContext);
  return (
    <div className="box" onClick={() => update(space)} id={space}>
      {content}
    </div>
  );

}