import { useState, useEffect } from 'react';

import './ProgressBar.css'

function ProgressBar({ audioRef }) {
  const [widthPercentage, setWidthPercentage] = useState("0%");
  const [time, setTime] = useState("00:00");

  function getWidth() {
    if (!audioRef.current) return;

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const width = Math.floor((currentTime / duration) * 100);

    setWidthPercentage(`${width}%`)

  }

  function getTime() {
    if (!audioRef.current) return;

    let minutes = Math.floor(audioRef.current.currentTime / 60);
    let seconds = Math.floor(audioRef.current.currentTime % 60);

    minutes = `${minutes < 10 ? "0" + minutes : minutes}`
    seconds = `${seconds < 10 ? "0" + seconds : seconds}`

    setTime(`${minutes}:${seconds}`);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getWidth();
      getTime();
    }, 500);

    return () => clearInterval(interval);
  })

  return (
    <div className="ProgressBar">
      <div style={{ width: widthPercentage }}></div>
      <span aria-label="ProgressBar">{time}</span>
    </div >
  )
}

export default ProgressBar;