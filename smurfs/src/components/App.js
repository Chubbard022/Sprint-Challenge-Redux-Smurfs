import React, { Component } from 'react';
import './App.css';

import SmurfFriendForm from './SmurfFriendForm';
import SmurfFriendList from './SmurfFriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SmurfFriendForm />
      <SmurfFriendList />
      </div>
    );
  }
}

export default App;
