import React from 'react'
import axios from 'axios'
import Select from 'react-select'
import subjects from '../../lists/Subjects'
import sketches from '../../lists/Sketches'
import Auth from '../../lib/Auth'


class ExerciseNew extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {
        content: '',
        level: 1,
        sketch: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeNumbers = this.handleChangeNumbers.bind(this)
    this.handleChangeSubjects = this.handleChangeSubjects.bind(this)
    this.handleChangeSketch = this.handleChangeSketch.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.post(('/api/exercises/'), this.state.formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/exercises'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e){
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData })
  }

  handleChangeNumbers(e){ //The sketch and the levels are in numbers in the backend, so I wrote a method that it will handle the change with numbers and not strings
    console.log(this.state.formData)
    const formData = { ...this.state.formData, [e.target.name]: +e.target.value}
    this.setState({ formData })
  }


  handleChangeSketch(e) {
    const formData = { ...this.state.formData, sketch: e.value}
    this.setState({ formData })
  }
  handleChangeSubjects(selectedTags) {
    const formData = { ...this.state.formData, subjects: (selectedTags || []).map(option => option.value) }
    this.setState({ formData })
  }



  render(){
    return (
      <section className="section">
        <div className="hero">
          <div className="column is-half is-offset-one-quarter">
            <div className="hero-body">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Exercise</label>
                  <input
                    className="textarea"
                    name="content"
                    placeholder="How many sides does a pentagon have?"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Level</label>
                  <div className="field">
                    <div className="control">
                      <select className="select" name="level"
                        onChange={this.handleChangeNumbers}>
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Add a Sketch</label>
                  <Select
                    name="sketch"
                    options={sketches}
                    onChange={this.handleChangeSketch}
                    className="basic-select"
                    classNamePrefix="select"
                  />
                </div>
                <div className="field">
                  <label className="label">Subjects</label>
                  <Select
                    isMulti
                    name="subject"
                    options={subjects}
                    onChange={this.handleChangeSubjects}
                    className="basic-select"
                    classNamePrefix="select"
                  />
                </div>
                <button className="button">Save</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ExerciseNew
