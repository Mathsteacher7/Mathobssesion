import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import Select from 'react-select'


import subjectList from '../../lists/Subjects'

class ExercisesIndex extends React.Component {

  constructor(){
    super()

    this.state = {
      data: [],
      subject: '',
      sortTerm: 'subject|asc'
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.filterExercises = this.filterExercises.bind(this)
  }

  componentDidMount() {
    axios.get('/api/exercises/')
      .then(res => this.setState({ data: res.data }))
  }

  handleSelectChange(selected, field) {
    this.setState({ [field]: selected.label })
  }

  filterExercises(){
    const [field, order] = this.state.sortTerm.split('|')
    const filtered = _.filter(this.state.data, data => {
      const chosenState = this.state.subject
      return (this.state.subject ? new RegExp(chosenState).test(data.subjects.map(s => s.name)) : true)
    })
    return _.orderBy(filtered, [field], [order])

  }

  render(){
    if (!this.state.data) return 'Loading...'
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-2">
              <h1 className="title is-3">Subject</h1>
            </div>
            <div className="column">
              <div className="select">
                <Select
                  name="subject"
                  className="filter"
                  options= {subjectList}
                  defaultValue= {subjectList[0]}
                  onChange={selected => this.handleSelectChange(selected, 'subject')}
                  value={subjectList.find(option => option.label === this.state.subject)}>
                </Select>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
          </div>
          {this.state.data && this.filterExercises().map(exercise =>
            <div className="column" key={exercise.id}>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-header-title">{exercise.content}</h2>
                </div>
                <div className="card-content">{exercise.subjects.map(subject => <div className="icon" key={subject.id} id={subject.name.replace(/\s/g, '')}/>)}</div>
                {exercise.sketch && <figure className="imageSketch">
                  <img src={exercise.sketch.url} />
                </figure>}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ExercisesIndex
