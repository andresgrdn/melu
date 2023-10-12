import { useRef } from 'react'

import './App.css'
import TrackDisplay from './Components/TrackDisplay'
import ProgressBar from './Components/ProgressBar.jsx'
import Controls from './Components/Controls.jsx'

import cancion from './assets/music/a_susurros_suaves.mp3'

function App() {
  const audioRef = useRef(null);

  return (
    <>
      <div className="player">
        <TrackDisplay />

        <audio className='player__audio' ref={audioRef}>
          <source src={cancion} type='audio/mpeg' />
        </audio>

        <ProgressBar />

        <Controls audioRef={audioRef} />
      </div>
    </>
  )
}

export default App
