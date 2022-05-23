import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header/Header";
import Loading from "./loading/Loading";
import ArtistImage from "./ArtistImage/ArtistImage";
import DefaultImage from "./Default/DefaultImage";
const axios = require("axios");

function App() {
  const { handleSubmit, register } = useForm();
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(false);

  const response = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  const onSubmit = (values) => {
    setSong(values.song);
    setArtist(values.artist);
    LyricsFetcher(values.artist, values.song);
  };
  //test the app to search bugs
  //weather app to the other project
  const LyricsFetcher = async () => {
    setLoading(true);
    axios
      .request(response)
      .then(function (response) {
        const data = response.data;
        setLyrics(data.lyrics);
        console.log(data.lyrics);
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
      })
  }
  useEffect(() => {
    LyricsFetcher()
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="songSearcher-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Artist" required={true} {...register("artist")} />
          <input placeholder="Song" required={true} {...register("song")} />
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
        <p className="artist-name-song">{loading ? <Loading /> : ""}</p>
        <p className="pre-paragraph">
          {lyrics === undefined || lyrics.length < 0
            ? "Sorry we cant find your song"
            : lyrics}
        </p>
      </div>
    </div>
  );
}

export default App;
