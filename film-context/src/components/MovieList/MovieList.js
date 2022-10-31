import React from 'react'
import initialMovies from '../../consts/initialMovies';
import Movie from '../Movie/Movie'

const MovieList = () => {
  return (
      <div className='container'>
        <div className='row'>
          {initialMovies.map((movie) => {
            return (
              <div className='col-md-4' key={movie.id}>
                <Movie
                  movie={movie}
                />
              </div>
            )
          })}
          
        </div>
      </div>
  )
}

export default MovieList;