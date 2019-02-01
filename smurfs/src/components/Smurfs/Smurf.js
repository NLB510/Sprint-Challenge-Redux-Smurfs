import React from 'react'

const Smurf = props => {
  const {name, age, height} = props.smurf
  
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  )
}

export default Smurf;