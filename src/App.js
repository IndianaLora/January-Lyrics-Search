import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

function App() {
  let artist = "Rosalia";
  let song = "Con altura";
  let apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    //make it dinamic
    // let artist = "Rosalia";
    // let song = "Con altura";
    // let apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    console.log(values)
  };
  const lyricsFetcher = async () => {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    setLyrics(data.lyrics);
  };
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    lyricsFetcher();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="songSearcher-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Artist"
            required={true}
            {...register("artist")}
          ></input>
          <input
            placeholder="Song"
            required={true}
            {...register("song")}
          ></input>
          <div className="wrapper">
            <button>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
      <div className="lyrics-container">
        <h1 className="song-tittle">
          {artist}:{song}
        </h1>
        <p>{lyrics.length < 0 ? "Sorry we cant find your song" : lyrics}</p>
      </div>
    </div>
  );
}

export default App;
