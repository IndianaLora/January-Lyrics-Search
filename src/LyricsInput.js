//rfce
import { useForm } from "react-hook-form"

export default function LyricsInput() {

    const { handleSubmit, register } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div className="songSearcher-form-container">
            <form onSubmit={handleSubmit(onSubmit)} >
                <input placeholder="Artist"></input>
                <input placeholder="Song"></input>
                <div class="wrapper">
                    <button><span>Search</span></button>
                </div>
            </form>
        </div >

    )

}