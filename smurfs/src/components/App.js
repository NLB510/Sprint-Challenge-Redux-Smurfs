import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from "react-redux"

import { fetchData } from "../actions"

import SmurfList from "./Smurfs/SmurfList"

class App extends Component {

componenteDidMount(){
  this.props.fetchData();
}



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  
  return {
    smurfs: state.smurfs,
    status: state.status
  }
}

export default connect(mapStateToProps, {fetchData})(App);
