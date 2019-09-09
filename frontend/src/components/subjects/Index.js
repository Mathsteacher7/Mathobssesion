import React from 'react'
import axios from 'axios'
import CardSubject from './card_subject'

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
        <h1 className="title is-2">Subjects</h1>
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.subjects && <h2 className="title is-2">Loading...</h2>}

            {this.state.subjects && this.state.subjects.map(subject =>
              <div className="column" key={subject.id}>
                <CardSubject {...subject} />
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

export default SubjectsIndex