import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header/Header";
import Loading from "./loading/Loading";
import ArtistImage from "./ArtistImage/ArtistImage";
import DefaultImage from "./Default/DefaultImage";
//Persistencia por url
//Did you mean ?????
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the
// request's mode to 'no-cors' to fetch the resource with CORS disabled.
function App() {
  const { handleSubmit, register } = useForm();
  const [lyrics, setLyrics] = useState([]);
  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(false);

  let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

  const onSubmit = (values) => {
    setSong(values.song);
    setArtist(values.artist);
    lyricsFetcher(values.artist, values.song);
  };

  const lyricsFetcher = async (artist, song) => {
    setLoading(true);
    const response = await fetch(`${url}`);
    const data = await response.json();
    setLyrics(data.lyrics);
    console.log(data.lyrics);
    setLoading(false);
  };
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
