import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from "react-redux";

import { fetchData } from "../actions";

import SmurfList from "./Smurfs/SmurfList";
import SmurfForm from "./SmurfForm/SmurfForm"

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
      <h1>Smurf List</h1>
        <SmurfForm />
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  

  return {
    smurfs: state.smurfs,
    status: state.status
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
