import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get()
      .then(res => console.log(res.data))
  }


  render(){
    return(
      <h1>Hello</h1>
    )
  }
}

export default UserShow
