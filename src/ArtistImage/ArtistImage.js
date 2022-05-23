import React from "react";
import { useState, useEffect } from "react";
import DefaultImg from "../img/DefaultImg.jpg";
const axios = require("axios");

export default function ArtistImage(props) {
  const [artistImage, setArtistImage] = useState([]);
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${props.artist}`,
    headers: {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "2d20de1023msh46bfe4da82c4593p1d812ajsn0c499f226d5b",
    },
  };
  const songImage = async () => {
    axios
      .request(options)
      .then(function (response) {
        setArtistImage(response.data.picture_medium);
      })
      .catch(function (error) {
        console.error(error);
        setArtistImage("../img/DefaultImg.jpg");
      });
  };
  useEffect(() => {
    songImage();
  }, []);
  return (
    <div>
      <img src={artistImage != null ? artistImage : DefaultImg} alt="Artist" />
    </div>
  );
}
