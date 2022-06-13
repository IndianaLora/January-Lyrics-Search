import React from "react";
import { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import DefaultImg from "../img/DefaultImg.jpg";
const axios = require("axios");

export default function ArtistImage(props) {
  const [artistImage, setArtistImage] = useStateIfMounted("Getting");
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${props.artist}`,
    headers: {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "2d20de1023msh46bfe4da82c4593p1d812ajsn0c499f226d5b",
    },
  };
  const SongImage = async () => {
    axios
      .request(options)
      .then(function (response) {
        if (response) {
          setArtistImage(response.data.picture_medium);
        }
      })
      .catch(function (error) {
        console.error(error);
        setArtistImage("../img/DefaultImg.jpg");
      });
  };
  useEffect(() => {
    SongImage();
  }, []);

  return (
    <div>
      <img src={artistImage != null ? artistImage : DefaultImg} alt="Artist" />
    </div>
  );
}
