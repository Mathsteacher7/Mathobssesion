import React from 'react'
import axios from 'axios'
import StarRatings from 'react-star-ratings'




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
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Exercise No.</th>
            <th>Exercise</th>
            <th>Level</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data && this.state.data.map(exercise => <tr key={exercise.id}>
            <td></td>
            <td>{exercise.content} {exercise.sketch && <figure className="image is-4by3">
              <img src={exercise.sketch.url} alt={exercise.sketch.name}/>
            </figure>}</td>
            <td>{exercise.level === 1 && <StarRatings
              rating={exercise.level}
              starDimension={exercise.size || '20px'}
              starSpacing="5px"
              starRatedColor="green"
              numberOfStars={3}
            />}
            {exercise.level === 2 && <StarRatings
              rating={exercise.level}
              starDimension={exercise.size || '20px'}
              starSpacing="5px"
              starRatedColor="#FFBF00"
              numberOfStars={3}
            />}
            {exercise.level === 3 && <StarRatings
              rating={exercise.level}
              starDimension={exercise.size || '20px'}
              starSpacing="5px"
              starRatedColor="red"
              numberOfStars={3}
            />}</td>
            <td>{exercise.subjects.map(subject => <div className="icon" key={subject.id} id={subject.name.replace(/\s/g, '')}/> )}</td>
          </tr>
          )}
        </tbody>
      </table>

    )
  }
}

export default StatisticsIndex
