import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import FirstComponent from './components/FirstComponent';

function yourName(){
  var name = "Iván Fernández";
  var result = (
    <h2>{name}</h2>
  );

  return result;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Te damos la bienvenida, {yourName()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="firstComponent">
          <FirstComponent/>
      </section>
    </div>
  );
}

export default App;
