import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo2 from '../../images/logo2.png'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {


  constructor(){
    super()

    this.state = {
      navbarOpen: false,
      dropdownOpen: false
    }

    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  logout() {
    Auth.removeToken()
    Auth.removeUser()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        navbarOpen: false,
        dropdownOpen: false
      })
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
              {Auth.isAuthenticated() && <div className="navbar-item">
                <div className={`dropdown is-right ${this.state.dropdownOpen ? 'is-active' : ''}`}>
                  <div className="dropdown-trigger">
                    <button className="navbar-item" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggleDropdown}>
                      <img
                        src={`${Auth.getUserImage()}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <Link to={'/profile'} className="dropdown-item">
                      My Profile
                      </Link>
                      <a className="dropdown-item"  onClick={this.logout}>
                      Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>}
              <Link to="/contactus" className="navbar-item">Contact Us</Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
