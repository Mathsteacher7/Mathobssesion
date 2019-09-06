import React from 'react'

import logo from '../images/logo.png'

const Home = () => {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <div className="column is-multiline">
            <div className="column">
              <figure className="image is-">
                <img src={logo} />
              </figure>
            </div>
            <div className="column">
              <h2 className="subtitle">Teacher's best friend</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
