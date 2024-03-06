import { useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import { APIContainer } from "../API/tmdb";

export default function SearcBox() {

    const [searchQuery, setSearchQuery] = useState("");

    async function handleForm(e) {
        e.preventDefault();
        try {
            const response = await APIContainer.searchBox(searchQuery);
            console.log(response);
        } catch (error) {
            console.log(error)
        };
    }

    function handleChange(e){
        const query = e.target.value;
        setSearchQuery(query);
        setTimeout(async () => {

        },3000)
    }

    return (
        <section className="parallax bg-blend-multiply">
            <div className="overlay flex flex-col justify-center items-center relative">
                <h1 className="absolute md:top-32 md:left-32 top-16 text-white md:text-4xl text-2xl font-bold tracking-wide">Welcome to Movie-DB</h1>
                <form 
                    onSubmit={ e => handleForm(e) } 
                    className="search-box my-32 md:my-44"
                >
                    <input 
                        onChange={ e =>handleChange(e) } 
                        type="text" name="query" 
                        className="search w-full text-md p-3 outline-none" 
                        placeholder="Search for a Movie, TV Show, Person . . ." 
                    />
                    <button 
                        type="submit" 
                        className="search--button flex items-center text-white bg-ebony-clay-700 p-3"
                    > 
                        <span className="material-icons">search</span> 
                    </button>
                </form>
            </div>
        </section>
    )
}