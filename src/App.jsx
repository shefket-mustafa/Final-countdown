import './index.css'
import Player from "./components/Player"
import TimerChallenge from './components/TimerChallenge'


function App() {

  return (
    <>
    <div id="modal"></div>
    <div id="content">
      <header>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
       <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'}/>
        <TimerChallenge title={'Not easy'}/>
        <TimerChallenge title={'Getting tough'}/>
        <TimerChallenge title={'Pros only'}/>
      </div>
      </div>
    </>
  )
}

export default App
