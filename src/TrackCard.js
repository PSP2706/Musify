import React from 'react';

export default function TrackCard({ track }) {
  return (
    <div className='col-lg-3 col-md-6 py-2'>
      <div className="card" >
        <img src={track.album.images[1].url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{track.name} - {track.album.name}</h5>
          <p className="card-text">
            {track.album.artists[0].name}
          </p>
          <audio src={track.preview_url} controls className='w-100'></audio>
        </div>
      </div>
    </div>
  );
}
