import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title";
import LightSwitch from "./components/LightSwitch"
import User from "./components/User"
import UserBoard from './components/UserBoard';

function App() {
  return (
    <div className="App">
{/*       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
          'Welcome to Codaisseur'
        {/* </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header> */}
      <main>
       <UserBoard />
        <User name= "Shuaib" heroName="Alshuaibi" />
        <User name= "Mohamoud" heroName="Father">
          <p>This is children props</p>
        </User>
        <User name= "Aljabali" heroName="GrandFather">
          <button>Baroobo</button>
          </User>

        
        <Title content="Some Simple Title"/>
        <LightSwitch />
      </main>
    </div>
  );
}


export default App