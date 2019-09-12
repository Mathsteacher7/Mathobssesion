import React from 'react'

import logo from '../images/logo.png'

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is">
              <figure className="image is-">
                <img src={logo} />
              </figure>
            </div>
            <div className="column">
              <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="title is-1">Teacher's best friend</h1>
                <br/>
                <p className="subtitle">A unique website, where teachers can upload exercises and share them with other teachers. We want to give free access to teachers across the county to better exercises. <hr/> Feel free to add your favourite exercises, so together we will create the best database of exercises in the whole world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
