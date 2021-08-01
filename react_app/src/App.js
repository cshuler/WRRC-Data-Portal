import Ax from './components/ax';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'; 
import Uploads from './components/uploads';

function App() {
  return (
    <div className="App">
      <Uploads />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WRRC Data Portals Site
        </p>
      </header>
    </div>
  );
}

export default App;
