import React from 'react'
import axios from 'axios'
import CardExercise from '../exercises/card_exercise'




class StatisticsIndex extends React.Component {

  constructor(){
    super()

    this.state = {
      data: [],
      subject: '',
      sortTerm: 'subject|asc'
    }
  }

  componentDidMount() {
    axios.get('/api/exercises/')
      .then(res => this.setState({ data: res.data.filter(n => n.subjects.map(s => s.name).includes('Statistics')) }))
  }



  // console.log(this.state.data[4].subjects.map(s => s.name === 'Number'))

  render(){
    if (!this.state.data) return 'Loading...'
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data && this.state.data.map(exercise =>
              <div className="column" key={exercise.id}>
                <CardExercise {...exercise} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default StatisticsIndex
