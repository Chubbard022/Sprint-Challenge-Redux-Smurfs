import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSmurfs} from '../actions'
import SmurfFriendForm from './SmurfFriendForm';
import SmurfFriendList from './SmurfFriendList';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
      <SmurfFriendForm smurfs={this.props.smurfs} />
      <SmurfFriendList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})
export default connect(mapStateToProps,{getSmurfs})(App)
