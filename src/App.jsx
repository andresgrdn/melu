import { useRef } from 'react'

import './App.css'
import Controls from './Controls.jsx'
import cancion from './assets/a_susurros_suaves.mp3'
import todoroki from './assets/bakugou.png'

function App() {
  const audioRef = useRef(null);

  return (
    <>
      <div className="player">
        <img className='player__imagen' src={todoroki} alt="" />

        <audio className='player__audio' ref={audioRef}>
          <source src={cancion} type='audio/mpeg' />
        </audio>

        <Controls audioRef={audioRef} />
      </div>
    </>
  )
}

export default App
