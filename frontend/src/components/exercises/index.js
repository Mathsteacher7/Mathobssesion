import React from 'react'
import axios from 'axios'

class ExercisesIndex extends React.Component {

  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/api/exercises/')
      .then(res => this.setState({data: res.data}))
  }

  render(){
    return (
      <div className="section">
        <h1>Hello Django!</h1>
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.data && <h2 className="title is-2">Loading...</h2>}

            {this.state.data && this.state.data.map(exercise =>
              <div className="column" key={exercise.id}>
                <div className="card">
                  <h2>{exercise.content}</h2>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

export default ExercisesIndex
