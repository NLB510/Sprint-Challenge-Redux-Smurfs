import React from "react";

import { connect } from "react-redux";

import { addingSmurf, addSmurf } from "../../actions";

import { TextField, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme =>
  console.log(theme) || {
    form: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-evenly",
      margin: "0 auto",
      width: "100%"
    }
  };

class SmurfForm extends React.Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [name]: value
        }
      };
    });
    this.props.addingSmurf();
  };

  handleSubmit = e => {
    e.preventDefault();
    const formattedSmurf = {
      ...this.state.smurf,
      height: `${this.state.smurf.height}cm`
    };
    this.props.addSmurf(formattedSmurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.props.classes.form}>
        <TextField
          type="text"
          label="Name"
          name="name"
          value={this.state.smurf.name}
          onChange={this.handleChange}
          required
        />
        <TextField
          type="text"
          label="Age"
          name="age"
          value={this.state.smurf.age}
          onChange={this.handleChange}
          required
        />
        <TextField
          type="text"
          label="Height"
          name="height"
          value={this.state.smurf.height}
          onChange={this.handleChange}
          required
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    );
  }
}

const smurfFormWithStyles = withStyles(styles)(SmurfForm);

export default connect(
  null,
  { addingSmurf, addSmurf }
)(smurfFormWithStyles);
