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
        };
    };

    function handleChange(e){
        const query = e.target.value;
        setSearchQuery(query);
        setTimeout(async () => {

        },1000)
    };

    


    return (
        <Spline scene="https://prod.spline.design/WQ5KTeJT-5h28609/scene.splinecode" />
    )
}