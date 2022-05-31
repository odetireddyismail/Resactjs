import React from 'react'
import {withRouter} from 'react-router-dom'

//Tranforming the data from ione Component to Another
const User = (props) => {
    console.log(props.match.params.id)
  return (
    <div>User
        
    </div>
  )
}

export default withRouter(User)