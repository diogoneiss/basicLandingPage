import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Código escrito por diogo neiss</h1>
        <h1>e Lucas Saliba =D</h1>
        <p>
          Edite <code>src/App.js</code> e salve para contribuir com 'nosso'
          projeto.
        </p>
        <Component />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda react aqui, vale muito a pena
        </a>
      </header>
    </div>
  );
}

export default App;
