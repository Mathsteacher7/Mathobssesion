import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class ProfileShow extends React.Component {

  constructor() {
    super()

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const token = Auth.getToken()
    axios.get('/api/profile/', { headers: { Authorization: `Bearer ${token}`} })
      .then(res => this.setState({ user: res.data }))
  }


  render(){
    return(
      <div className="section">
        <div className="container">
          <div className="media">
            <div className="media-left">
              <figure className="userImage">
                <img src={this.state.user.image} alt={this.state.user.username}/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.state.user.first_name} {this.state.user.last_name}</p>
              <p className="subtitle is-6">{this.state.user.type}</p>
              <p className="subtitle is-6">{this.state.user.area}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileShow
