import React from "react";

import {connect} from "react-redux"

import {addingSmurf, addSmurf} from "../../actions"

class SmurfForm extends React.Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  handleChange = e => {
    const {name, value} = e.target

    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [name]: value
        }
      };
    });
    this.props.addingSmurf();

  }

  handleSubmit = e => {
    e.preventDefault();
    const formattedSmurf = {
      ...this.state.smurf,
      height: `${this.state.smurf.height}cm`
    }
    this.props.addSmurf(formattedSmurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Smurf Name"
          name="name"
          value={this.state.smurf.name}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Smurf Age"
          name="age"
          value={this.state.smurf.age}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Smurf Height"
          name="height"
          value={this.state.smurf.height}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, {addingSmurf, addSmurf})(SmurfForm);
