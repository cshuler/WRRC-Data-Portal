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

	const data = require('./data.json');

	const title = data['title'];
	const author = data['authors'];
	const keywords = data['keywords'];

    const crazy = () => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();


    const inpFile = document.getElementById("inpFile");

	   for (const file of inpFile.files){
		formData.append("myFiles[]", file);
	   }

	   xhr.open("post", "http://clarkwhitehead.com/upload.php");
	   xhr.send(formData);
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

	
	  <input type="file" id="inpFile" multiple />
	  <button onClick={crazy} id="btnUpload">Upload Files</button>
	  
		<h1>Title: {title}</h1>
		<h1>Author: {author}</h1>
		<h1>Keywords: {keywords}</h1>

	</header>
    </div>
  );
}



export default App;
