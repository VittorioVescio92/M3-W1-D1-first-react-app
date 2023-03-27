import logo from "./logo.svg";
import "./App.css";
import "./components/ButtonComponent.jsx";
import ButtonComponent from "./components/ButtonComponent.jsx";
import ImageComponent from "./components/ClassImageComponent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content="premi qui" />
        <div>
          <ImageComponent src="https://picsum.photos/200/300" alt="Immagine Random" />
        </div>
      </header>
      <ButtonComponent content="premi qui" />
    </div>
  );
}
export default App;
