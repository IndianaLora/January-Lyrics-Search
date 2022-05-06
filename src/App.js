
import './App.css';
import { useState, useEffect } from "react";
// import {useForm} from 
function App() {
  const artist = "Rosalia";
  const song = "Con altura";
  const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

  const lyricsFetcher = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    setLyrics(data.lyrics)
  }
  const [lyrics, setLyrics] = useState([])
  useEffect(() => {
    lyricsFetcher();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="center header">Welcome to January</h1>
      </header>
      <h3 className='description center'>Song searcher</h3>
      <div className='lyrics-container'>
        <h1 className='song-tittle'>{artist}:{song}</h1>
        <p>{lyrics.length < 0 ? "Sorry we cant find your song" : lyrics}</p>
      </div>
    </div>
  );
}

export default App;
