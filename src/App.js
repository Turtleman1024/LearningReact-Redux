import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learning React/Redux With Turtleman1024</h1>      
      </header>
      <PostForm />
      <Posts />
      
    </div>
  );
}

export default App;
