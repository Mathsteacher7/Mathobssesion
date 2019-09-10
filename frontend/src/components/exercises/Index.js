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

  // console.log(this.state.data[4].subjects.map(s => s.name === 'Number'))

  render(){
    if (!this.state.data) return 'Loading...'
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column">
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <div className="select is-fullwidth">
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
            </div>
            {this.state.data && this.filterExercises().map(exercise =>
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

export default ExercisesIndex
