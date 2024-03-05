import { api_key } from "./API/tmdb";

export default function App() {
  function getKEY(){
    const key = api_key;
    console.log(key); 
  }
  
  return (
    <button onClick={getKEY}>GET</button>
  )
}
