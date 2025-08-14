import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Shop from './components/shoppingList';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <h3>Addition of my fav numbers are {10+20}</h3>

      <h3>My name is {process.env.REACT_APP_NAME}</h3>

      <h3>today is { new Date().toDateString()}</h3>

      <h3>we have training tomorrow? {15 < 10 ? "yes" : "no"}</h3>
      

       <Home/>
       <Shop/>  
    </div>

   
  );
}

export default App;
