import React from 'react';
import logo from './logo.svg';
import './App.css';
import Micomponenete from './componentes/Micomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hola Rocibel</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="Componentes">

        <Micomponente/>
      </section>
      </header>
    </div>
  );
}

export default App;
