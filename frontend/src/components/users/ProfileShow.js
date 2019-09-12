import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

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
          <div className="hero" style={{ background: 'white' }}>
            <div className="hero-body">
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
                  <Link className="subtitle has-text-danger" to={'/profile/edit'}>Edit</Link>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

export default ProfileShow
