import { useRef } from 'react'

import './App.css'
import cancion from './assets/a_susurros_suaves.mp3'
import todoroki from './assets/bakugou.png'
import play_icon from './assets/icons/play_arrow.svg'
import rwd_icon from './assets/icons/fast_rewind.svg'
import fwd_icon from './assets/icons/fast_forward_FILL0_wght200_GRAD0_opsz24.svg'

function App() {
  const audioObj = useRef();

  return (
    <>
      <div className="player">
        <img className='player__imagen' src={todoroki} alt="" />

        <audio className='player__audio'>
          <source src={cancion} type='audio/mpeg' />
        </audio>

        <div className='player__controls'>
          <button className="play" aria-label="play pause toggle">
            <img src={play_icon} alt="play icon" />
          </button>
          <div className="timer">
            <div></div>
            <span aria-label="timer">00:00</span>
          </div>
          <button className="rwd" aria-label="rewind">
            <img src={rwd_icon} alt="play icon" />
          </button>
          <button className="fwd" aria-label="fast forward">
            <img src={fwd_icon} alt="play icon" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
