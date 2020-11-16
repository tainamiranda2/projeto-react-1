import React, {useState} from 'react';
import logo from './logo.jpg';
//import { Component } from 'react';
import './App.css';

const App = () => {
const [showImage, setShowImage] = useState(false);

const toggle = () => {
  setShowImage(!showImage);
}

return (
<div className="App">
<header className="App-header">
<button type="button" onClick={toggle}>

  {this.state.showImage ? 'Esconder' : 'Mostrar'}
  </button>

{this.state.showImage && (
<img src={logo} className="App-logo" alt="logo" />
)}
  
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Teste
  </a>
</header>
</div>
);
    
}

export default App;