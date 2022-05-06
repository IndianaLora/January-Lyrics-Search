
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const artist = "Rosalia";
  const song = "Con altura";
  const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

  const lyricsFetcher = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    console.log(data)
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
    </div>
  );
}

export default App;
