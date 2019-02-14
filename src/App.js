import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

console.log('Working just fine!');

class App extends Component {
  render(){
    var user = {
      name: 'Kartik',
      age: 23,
      hobbies: ['play','eat']
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Home user={user} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
