import { useRef } from 'react'

import './AudioPlayer.css'
import TrackDisplay from './Components/TrackDisplay'
import ProgressBar from './Components/ProgressBar.jsx'
import Controls from './Components/Controls.jsx'

function AudioPlayer() {
  const audioRef = useRef(null);

  return (
    <>
      <div className="player">
        <TrackDisplay audioRef={audioRef} />

        <ProgressBar />

        <Controls audioRef={audioRef} />
      </div>
    </>
  )
}

export default AudioPlayer
