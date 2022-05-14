import React from 'react'

export default function Audio(props) {
    let url = `https://api.lyrics.ovh/v1/${props.artist}/${props.song}`;
  return (
    <div>Audio</div>
  )
}

