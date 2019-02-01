import React from "react"

import Smurf from "./Smurf"


const SmurfList = props => {
  const smurfList = props.smurfs.map((smurf,index) => {
    return <Smurf key={index} smurf={smurf} />
  })

    return (
      <div>
        {smurfList}
      </div>
    )
  }





export default SmurfList

