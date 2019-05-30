import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
/********************************************* 
    First Need to install redux
npm i redux react-redux redux-thunk
Need to do another 'npm i' after above command
**********************************************/

/******************************** 
      Bring in a provider 
The glue for react and redux
*********************************/
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    //Store documentation: https://github.com/reduxjs/redux/blob/master/docs/api/Store.md
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Learning React/Redux With Turtleman1024</h1>      
        </header>
        <PostForm />
        <hr />
        <Posts />        
      </div>
    </Provider>
  );
}

export default App;
