import './App.css'
import cancion from './assets/a_susurros_suaves.mp3'
import todoroki from './assets/bakugou.png'

function App() {
  return (
    <>
      <div className="player">
        <img className='player__imagen' src={todoroki} alt="" />

        <audio className='player__audio' controls>
          <source src={cancion} type='audio/mpeg' />
        </audio>

        <div className='player__controls'>
          <button className="play" data-icon="P" aria-label="play pause toggle"></button>
          <button className="stop" data-icon="S" aria-label="stop"></button>
          <div className="timer">
            <div></div>
            <span aria-label="timer">00:00</span>
          </div>
          <button className="rwd" data-icon="B" aria-label="rewind"></button>
          <button className="fwd" data-icon="F" aria-label="fast forward"></button>
        </div>
      </div>
    </>
  )
}

export default App
