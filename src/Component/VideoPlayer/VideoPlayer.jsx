import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/video.mp4';

const VideoPlayer = ({ playstate, setPlaystate }) => {
  const playerRef = useRef(null);

  const closePlayer = (e) => {
    // Close only if clicked outside the video element
    if (e.target === playerRef.current) {
      setPlaystate(false);
    }
  };

  return (
    <div 
      className={`video-player ${playstate ? '' : 'hide'}`} 
      ref={playerRef} 
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;