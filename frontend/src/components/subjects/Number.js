import React from 'react'
import axios from 'axios'

class NumberIndex extends React.Component {

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
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.data && <h2 className="title is-2">Loading...</h2>}
            {this.state.data && this.state.data.map(exercise =>
              <div className="column" key={exercise.id}>
                <div>
                  <div className="card">
                    <h2>{exercise.content}</h2>
                    <hr/>
                    <div>{exercise.subjects.map(subject => <h3 key={subject.name}>{subject.name}</h3>)}</div>
                  </div>
                  <div className="column">
                    {exercise.sketch && <figure className="image">
                      <img
                        src={exercise.sketch.url}
                      />
                    </figure>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default NumberIndex
