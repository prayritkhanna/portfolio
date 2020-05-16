import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Hobbies from './Hobbies.js';
import Projects from './Projects';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navigation logoTitle="Prayrit Khanna"/>
        <Header title="{Hello World!}" button="Start the Tour!"/>
        <Hobbies/>
        <Projects/>
        <images/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

