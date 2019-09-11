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
              <h2 className="title is-2">Teacher's best friend</h2>
              <p className="subtitle">Mathobsession is a unqiue website, where teachers can upload exercises and share them with other teachers. We want to give free access to teachers all accros the county to better exercises. <br/> Feel free to add your favorite exercises, so together we will create the best database of exercises in the whole world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
