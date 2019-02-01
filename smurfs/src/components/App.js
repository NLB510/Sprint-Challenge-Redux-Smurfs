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
import SmurfForm from "./SmurfForm/SmurfForm";

import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme =>
  console.log(theme) || {
    root: {
      margin: "20px auto",
      padding: 20,

      width: "50%"
    }
  };

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Paper className={this.props.classes.root}>
          <Typography variant="display1" align="center" gutterBottom>
            SMURF LIST
          </Typography>
          <SmurfForm />
          <SmurfList smurfs={this.props.smurfs} />
        </Paper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    status: state.status
  };
};

const appWithStyles = withStyles(styles)(App);

export default connect(
  mapStateToProps,
  { fetchData }
)(appWithStyles);
