//rfce
import { useForm } from "react-hook-form"

export default function LyricsInput() {

    const { handleSubmit, register } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div className="songSearcher-form">
            <h3 className="description center">Song searcher</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input placeholder="Type the artist"></input>
                <input placeholder="Type the song"></input>
                <button>Search</button>
            </form>
        </div>

    )

}