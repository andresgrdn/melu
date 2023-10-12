import todoroki from '../assets/images/bakugou.png'
import cancion from '../assets/music/a_susurros_suaves.mp3'

import './TrackDisplay.css'

function TrackDisplay({ audioRef }) {
  return (
    <div className="TrackDisplay">
      <img className='player__imagen' src={todoroki} />
      <audio className='player__audio' ref={audioRef}>
        <source src={cancion} type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default TrackDisplay;