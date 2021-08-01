import Axios from "axios";
import React, { useState } from "react";

export default function Ax() {

	  const [joke, setJoke] = useState("");

	  const getJoke = () => {
		        Axios.get(
				      "https://official-joke-api.appspot.com/random_joke"
				    ).then((response) => {
					          setJoke(response.data.punchline);
					          console.log(response.data.punchline);
					        });

		    }

	  return <div> Hey there <button onClick={getJoke}>Get Joke</button> {joke} </div>;
}
