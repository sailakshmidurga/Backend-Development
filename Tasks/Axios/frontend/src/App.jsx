import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [joke,setJoke] = useState(null);
  const getJoke = async() => {
    try{
    const res = await axios.get("http://localhost:3000/get-joke");
    setJoke(res.data);
    }
    catch(err){
      console.error(err);
    }
  };
  return(
    <div>
    <button type="button" onClick={getJoke}>Click to get a joke!</button>

    {joke && 
      (
        <div>
        <p><strong>{joke.setup}</strong></p>
        <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
};
export default App;