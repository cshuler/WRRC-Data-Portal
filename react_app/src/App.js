import logo from './logo.svg';
import './App.css';


function App() {

/*
	const fs = require('fs').promises;

	const path = __dirname + '/data.json';

	if(fs.existsSync(path)){
		console.log('file exits');
	}

*/

/*
	const data = require('./data.json');

	const title = data['title'];
	const author = data['authors'];
	const keywords = data['keywords'];
*/

	function getJson(){

		fetch('http://clarkwhitehead.com/data.json')
		  	.then(response => response.json())
		  	.then(data => console.log(data));

	}

    async function handleClick(){
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

	
	  <input type="file" id="inpFile" multiple />
	  <button onClick={handleClick} id="btnUpload">Upload Files</button>

	</header>
    </div>
  );
}



export default App;
