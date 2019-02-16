import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

console.log('Working just fine!');

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: 'Home'
    };
  }

  changeHomeLink(newName) {
    this.setState({
      homeLink: newName
    });
  }

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
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Home 
              user={user}
              changeLink={this.changeHomeLink.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
