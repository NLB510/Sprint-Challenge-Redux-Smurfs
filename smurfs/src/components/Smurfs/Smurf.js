import React from 'react'

const Smurf = props => {
  const {name, age, height, id} = props.smurf
  
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
      <button onClick={(e) => props.deleteSmurfItem(e,id)}>Delete</button>
    </div>
  )
}

export default Smurf;