import { useEffect, useState } from "react";
import { APIContainer } from "../API/tmdb";
import Spline from '@splinetool/react-spline';

export default function SearcBox() {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestionsList, setSuggestionsList] = useState();
    const [suggestions, setSuggestions] = useState();

    async function handleForm(e) {
        e.preventDefault();
        try {
            const response = await APIContainer.searchBox(searchQuery);
            const data = response.data.results;
            setSuggestionsList(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(e){
        const query = e.target.value;
        setSearchQuery(query);
        setTimeout(async () => {

        },1000)
    }

    


    return (
        <div className="flex justify-around items-center">
            <div className="ml-10">
                <h1 className="text-4xl font-bold">Welcome to Movie-DB.</h1>
                <h2 className="text-2xl">Your 2nd best source for Movies, TV Shows and People...</h2>
            </div>
            <div className="w-2/3">
                <Spline scene="https://prod.spline.design/WQ5KTeJT-5h28609/scene.splinecode" />
            </div>
        </div>
    )
}