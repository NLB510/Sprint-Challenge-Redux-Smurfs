import React from "react";

import Smurf from "./Smurf";

import { connect } from "react-redux";
import { deleteSmurf } from "../../actions";

import { List } from "@material-ui/core";

const SmurfList = props => {
  const deleteSmurfItem = (e, smurfId) => {
    e.preventDefault();
    props.deleteSmurf(smurfId);
  };

  const smurfList = props.smurfs.map((smurf, index) => {
    return (
      <React.Fragment key={index}>
        <List>
          <Smurf smurf={smurf} deleteSmurfItem={deleteSmurfItem} />
        </List>
      </React.Fragment>
    );
  });

  return <div>{smurfList}</div>;
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfList);
