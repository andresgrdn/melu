import { useState } from 'react'

import './Controls.css'
import play_icon from './assets/icons/play_arrow.svg'
import pause_icon from './assets/icons/pause.svg'
import rwd_icon from './assets/icons/fast_rewind.svg'
import fwd_icon from './assets/icons/fast_forward_FILL0_wght200_GRAD0_opsz24.svg'

function Controls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div className='player__controls'>
      <button className="play" aria-label="play pause toggle" onClick={handleClick}>
        {
          isPlaying ?
            <img src={pause_icon} alt="play icon" /> :
            <img src={play_icon} alt="play icon" />}
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
  )
}

export default Controls;