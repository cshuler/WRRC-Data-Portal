import logo from './logo.svg';
import './App.css';


function App() {

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
	  
	</header>
    </div>
  );
}



export default App;
