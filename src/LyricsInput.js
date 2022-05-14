// import { useState } from "react";
// import { useForm } from "react-hook-form";

//  export default function LyricsInput() {
//     const { handleSubmit, register } = useForm();
  
//     const [artist, setArtist] = useState([]);
//     const [song, setSong] = useState([]);
    
//     let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
//     const onSubmit = (values) => {
//       setSong(values.song);
//       setArtist(values.artist);
//       lyricsFetcher(values.artist, values.song);
//     };
    
//     return (
//         <div className="songSearcher-form-container">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input placeholder="Artist" required={true} {...register("artist")}></input>
//                 <input placeholder="Song" required={true} {...register("song")}></input>
//                 <div className="wrapper">
//                     <button>
//                         <span>Search</span>
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
