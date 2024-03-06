import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const [busqueda, setBusqueda] = useState()
  const { movies, fetchMovie } = useMovies(busqueda)

  function handleInputChange (e) {
    const movie = e.target.value
    setBusqueda(movie)
  }

  function handleSubmit (e) {
    e.preventDefault()
    fetchMovie()
  }

  return (
    <div className='page'>
      <header>
        <h1>Bucador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="búsqueda">Busca aquí tu película: &nbsp;</label>
          <input onChange={handleInputChange} placeholder='Ej: Terminator' type="text" value={busqueda}/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
