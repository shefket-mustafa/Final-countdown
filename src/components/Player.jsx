import { useRef, useState } from "react";

export default function Player() {

  const [playerName, setPlayerName] = useState(null);
  const player = useRef();

  const nameHandler = () => {
    setPlayerName(player.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome  {playerName ? playerName : 'unknown entity'} </h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={nameHandler}>Set Name</button>
      </p>
    </section>
  );
}
