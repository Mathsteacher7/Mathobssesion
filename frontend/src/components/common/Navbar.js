import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo2 from '../../images/logo2.png'

class Navbar extends React.Component {


  constructor(){
    super()

    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)

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
          </div>
          <div className="navbar-end">

          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)
