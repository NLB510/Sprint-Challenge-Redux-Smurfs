import React from 'react'

import { ListItem, ListItemText } from "@material-ui/core";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";

import { Delete } from "@material-ui/icons";


const Smurf = props => {
  const {name, age, height, id} = props.smurf
  
  return (
    // <div>
    //   <h2>{name}</h2>
    //   <p>{age}</p>
    //   <p>{height}</p>
    //   <button onClick={(e) => props.deleteSmurfItem(e,id)}>Delete</button>
    // </div>
    <div>
      <ListItem>
        <ListItemText primary={`${name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Age: ${age}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Height: ${height}`} />
      </ListItem>
      <ListItemSecondaryAction>
        <IconButton
          color='primary'
          onClick={(e) => props.deleteSmurfItem(e,id)}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </div>
  );
}

export default Smurf;