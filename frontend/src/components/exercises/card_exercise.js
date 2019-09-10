import React from 'react'

const CardExercise = ({ content, level, sketch, subjects }) => {


  return(
    <div className="card">
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-image">
        {sketch && <figure className="image is-4by3">
          <img src={sketch.url} alt={sketch.name}/>
        </figure>}
      </div>
      <div className="card-footer">
        <div className="card-footer-item">{level}</div>
        <div className="card-footer-item">{subjects.map( s => <h3 key={s.id}>{s.name}</h3>)}</div>
      </div>
    </div>
  )
}

export default CardExercise
