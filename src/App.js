import logo from './logo.svg';
import './App.css';
import Mybutton from './Mybutton';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
          Hello Bhuvaneswari 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <Mybutton text="click"></Mybutton>
      </header>
    </div>
  );
}

export default App;
