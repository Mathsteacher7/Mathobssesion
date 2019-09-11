import React from 'react'
import StarRatings from 'react-star-ratings'

const CardExercise = ({ content, level, sketch, subjects, size }) => {


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
        <div className="card-footer-item">
          {level === 1 && <StarRatings
            rating={level}
            starDimension={size || '20px'}
            starSpacing="5px"
            starRatedColor="green"
            numberOfStars={3}
          />}
          {level === 2 && <StarRatings
            rating={level}
            starDimension={size || '20px'}
            starSpacing="5px"
            starRatedColor="#FFBF00"
            numberOfStars={3}
          />}
          {level === 3 && <StarRatings
            rating={level}
            starDimension={size || '20px'}
            starSpacing="5px"
            starRatedColor="red"
            numberOfStars={3}
          />}
        </div>
        <div className="card-footer-item">{subjects.map( s => <h3 key={s.id}>{s.name}</h3>)}</div>
      </div>
    </div>
  )
}

export default CardExercise
