import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

	const [title, setTitle] = useState("A cool title will go here once you upload.");
	const [author, setAuthor] = useState("Upload a pdf so we can see who the author is.");
	const [keywords, setKeywords] = useState("I wonder what keywords will show up here.");

	function setVals(datas){
		setTitle(datas['title']);
		setAuthor(datas['authors']);
		setKeywords(datas['keywords']);

	}

	function getJson(){


		fetch('http://clarkwhitehead.com/data.json')
		  	.then(response => response.json())
		  	.then(data => setVals(data));

	}

    function handleClick(){
    	const xhr = new XMLHttpRequest();
    	const formData = new FormData();


    	const inpFile = document.getElementById("inpFile");

	    for (const file of inpFile.files){
			formData.append("myFiles[]", file);
	   	}

	   	xhr.open("post", "http://clarkwhitehead.com/upload.php");

	   	xhr.send(formData);
 		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {

				getJson();

			}
		};
	
    }

	

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

	
	  <input type="file" id="inpFile" name="filename" />
	  <button onClick={handleClick} id="btnUpload">Upload Files</button>
	<h1>Title: {title}</h1>
	<h1>Author: {author}</h1>
	<h1>Keywords: {keywords}</h1>
	</header>
    </div>
  );
}



export default App;
