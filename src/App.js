import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrackCard from './TrackCard';

export default function App() {
  const [tracks, setTracks] = useState([]);

  const getTracks = async (searchQuery) => {
    if (searchQuery === "") {
      alert("Please enter a search query.");
      return;
    }
    
    try {
      const response = await fetch(`https://v1.nocodeapi.com/hsiasjsusshs/spotify/werviTtWQWkytFYf/search?q=${searchQuery}&type=track`);
      const responseJson = await response.json();
      
      if (responseJson.tracks.items.length === 0) {
        alert("No tracks found for the given search query.");
        return;
      }

      setTracks(responseJson.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
      alert("Error fetching tracks. Please try again later.");
    }
  };

  useEffect(() => {
    const firstArtist = ["The Local Train", "Arijit Singh", "The Beatles", "Tame Impala", "Arctic Monkeys", "Shreya Ghoshal", "AP Dhillon", "Shaan", "KK", "Akshaya Mohanty", "Avicii"];
  
    const randomIndex = Math.floor(Math.random() * firstArtist.length);
    const randomArtist = firstArtist[randomIndex];
  
    getTracks(randomArtist);
  }, []);
  

  return (
    <>
      <Navbar handleSearch={getTracks} />
      <div className='container'>
        <div className={`row ${tracks.length === 0 ? "" : "d-none"}`}>
          <div className="card mt-5 bg-dark text-white">
            <div className="card-body">
              No tracks available. Please search for tracks using the search bar.
            </div>
          </div>
        </div>
        <div className='row'>
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </>
  );
}
