import React from "react";

import Smurf from "./Smurf";

import { connect } from "react-redux";
import { deleteSmurf } from "../../actions";

const SmurfList = props => {

const deleteSmurfItem = (e,smurfId) => {
  e.preventDefault();
  props.deleteSmurf(smurfId);
}

  const smurfList = props.smurfs.map((smurf, index) => {
    return <Smurf key={index} smurf={smurf} deleteSmurfItem={deleteSmurfItem} />;
  });

  return <div>{smurfList}</div>;
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfList);
