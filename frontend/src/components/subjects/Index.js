import React from 'react'
import axios from 'axios'
import CardSubject from './card_subject'
import { Link } from 'react-router-dom'

class SubjectsIndex extends React.Component {

  constructor(){
    super()
    this.state = { }
  }

  componentDidMount() {
    axios.get('/api/subjects/')
      .then(res => this.setState({subjects: res.data}))
  }

  render(){
    return (
      <div className="section">
        <div className="container">
          <h1 className="title is-2">Subjects</h1>
          <div className="columns is-multiline">
            {!this.state.subjects && <h2 className="title is-2">Loading...</h2>}

            {this.state.subjects && this.state.subjects.map(subject =>
              <div className="column" key={subject.id}>
                <Link to={`/subjects/${subject.name}`}>
                  <CardSubject {...subject} />
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

export default SubjectsIndex
