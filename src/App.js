import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header/Header";
import Loading from "./loading/Loading";
import ArtistImage from "./ArtistImage/ArtistImage";
import DefaultImage from "./Default/DefaultImage";


function App() {
  const { handleSubmit, register } = useForm();
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLyrics([])
    setSong(values.song);
    setArtist(values.artist);
    lyricsFetcher(values.artist, values.song);
  };
  const lyricsFetcher = async (artist, song) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.log(error + "Bobo")
    }
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await response.json();
    setLyrics(data.lyrics);
    setLoading(false);
  };
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
        {artist.length <= 0 || loading === true ? <DefaultImage /> : <ArtistImage artist={artist} />}
        <h1 className="song-tittle">
          {artist}:{song}
        </h1>
        <p className="artist-name-song">{loading ? <Loading /> : " "}</p>
        <pre>{lyrics === undefined || lyrics.length < 0 ? "Sorry we cant find your song, make sure you write it well." : lyrics}</pre>
      </div>
    </div>
  );
}

export default App;