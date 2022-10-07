import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './box.css';


export default function Box({ space, content }) {
  const { changeSpace } = useContext(GameContext);
  return (
    <div onClick={() => changeSpace(space)} id={space} className="box">
      {content}
    </div>
  );
}