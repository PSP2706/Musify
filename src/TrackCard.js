import React, { useRef } from 'react';

let currentAudio = null; 

export default function TrackCard({ track }) {
  const audioRef = useRef(null); 

  const handlePlay = () => {
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause(); 
    }
    currentAudio = audioRef.current; 
  };

  const handlePause = () => {
    if (currentAudio === audioRef.current) {
      currentAudio = null; 
    }
  };

  return (
    <div className='col-lg-3 col-md-6 py-2'>
      <div className="card">
        <img src={track.album.images[1].url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{track.name} - {track.album.name}</h5>
          <p className="card-text">
            {track.album.artists[0].name}
          </p>
          <audio
            ref={audioRef}
            src={track.preview_url}
            controls
            className='w-100'
            onPlay={handlePlay}
            onPause={handlePause} 
          ></audio>
        </div>
      </div>
    </div>
  );
}
