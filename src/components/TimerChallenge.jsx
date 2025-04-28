import { useRef, useState } from "react";

// let timer;

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);



    const startHandle =  () => {
        
        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);
        
        setTimerStarted(true);
    };

        const stopHandle = () => {
            clearTimeout(timer.current);
            setTimerStarted(false);
        };
  return (
      
    <>
    <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? stopHandle : startHandle}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is Running' : 'Timer inactive'} 
        </p>
    </section>
    </>
    );
}