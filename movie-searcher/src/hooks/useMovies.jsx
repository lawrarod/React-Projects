// import moviesJSON from '../mocks/withResults.json'
// import moviesErr from './mocks/noResults.json'
import { useState } from 'react'

export function useMovies (busqueda) {
  const URL = 'https://www.omdbapi.com/'
  const API_KEY = '3e747c73'
  const [moviesJSON, setMoviesJSON] = useState({})

  const fetchMovie = async () => {
    try {
      const res = await fetch(`${URL}?apikey=${API_KEY}&s=${busqueda}`)
      const data = await res.json()
      setMoviesJSON(data)
    } catch (error) {
      <p>{error}</p>
    }
  }

  const allMovies = moviesJSON.Search

  const moviesOBJ = allMovies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: moviesOBJ, fetchMovie }
}
