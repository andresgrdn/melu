import { useState } from 'react'

import play_icon from '../assets/icons/play_arrow.svg'
import pause_icon from '../assets/icons/pause.svg'
import rwd_icon from '../assets/icons/fast_rewind.svg'
import fwd_icon from '../assets/icons/fast_forward_FILL0_wght200_GRAD0_opsz24.svg'

import './Controls.css'

function Controls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function handleFwd() {
    let prevTime = audioRef.current.currentTime;
    let step = 10;
    audioRef.current.currentTime = prevTime + step;
  }
  function handleBwd() {
    let prevTime = audioRef.current.currentTime;
    let step = -10;
    audioRef.current.currentTime = prevTime + step;
  }

  return (
    <div className='player__controls'>
      <button className="play" aria-label="play pause toggle" onClick={handlePlay}>
        {
          isPlaying ?
            <img src={pause_icon} alt="play icon" /> :
            <img src={play_icon} alt="play icon" />}
      </button>
      <button className="rwd" onClick={handleBwd} aria-label="rewind">
        <img src={rwd_icon} alt="play icon" />
      </button>
      <button className="fwd" onClick={handleFwd} aria-label="fast forward">
        <img src={fwd_icon} alt="play icon" />
      </button>
    </div>
  )
}

export default Controls;