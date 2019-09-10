import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo2 from '../../images/logo2.png'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {


  constructor(){
    super()

    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">

            <Link to="/" className="navbar-item">
              <img src={logo2}/>
            </Link>

            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>


          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>

            <div className="navbar-start">
              <Link to="/subjects" className="navbar-item">Browse Subjects</Link>
              <Link to="/exercises" className="navbar-item">All Exercises</Link>
              {Auth.isAuthenticated() && <Link to="/exercises/new" className="navbar-item">Add Exercises</Link>}
            </div>

            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {Auth.isAuthenticated() && <a onClick={this.logout} className="navbar-item">Logout</a>}
              <Link to="/contactus" className="navbar-item">Contact Us</Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
