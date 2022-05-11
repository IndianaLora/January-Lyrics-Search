import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

function App() {
  const { handleSubmit, register } = useForm();
  const [lyrics, setLyrics] = useState([]);
  // const [artist, setArtist] = useState("Rosalia");
  //const [song, setSong] = useState("Malamente");\
  let artist = "Rosalia";
  let song = "Malamente";
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    // setSong(values.song);
    // setArtist(values.artist);
    console.log(values);
  };
  //Arreglar este con mejor practica
  const lyricsFetcher = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();
    setLyrics(data.lyrics);
    console.log(data.lyrics);
    setLoading(false);
  };

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
        <p>{loading ? "Loading..." : ""}</p>
        <p>{lyrics.length < 0 ? "Sorry we cant find your song" : lyrics}</p>
      </div>
    </div>
  );
}

export default App;
