import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();
 
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.showModal();
    };

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);

    }

    const startHandle =  () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    };

        const stopHandle = () => {
            dialog.current.showModal();
            clearInterval(timer.current);
            
        };
  return (
      
    <>
    { <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? stopHandle : startHandle}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is Running' : 'Timer inactive'} 
        </p>
    </section>
    </>
    );
}