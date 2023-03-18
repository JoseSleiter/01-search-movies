import { useState } from 'react';
import './App.css';
import Icon from './components/icon';
import { Movies } from './components/movies';
import { useGetMovies, useSearchQuery } from './hooks';

function App() {
  // controlled-Way
  const [sort, setSort] = useState(false)
  const { searchQuery, setSearchQuery, errorInput } = useSearchQuery()
  const { movies, hasMovies, loading } = useGetMovies({ searchQuery, sort, errorInput })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Uncontrolled-Way
    // const formData = new FormData(e.target)
    // const { searchQuery } = Object.fromEntries(formData)    
  }

  const hanldeChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='content--column'>
      <header>
        <div className='content--row img-100-ht'>
          <Icon />
        </div>
        <h1>Search your movies</h1>
        <div className="content-form">
          <form className='content--row form-content' onSubmit={handleSubmit} >
            <input onChange={hanldeChange}
              style={{
                border: '1px solid transparent',
                borderColor: errorInput ? 'red' : 'transparent'
              }}
              type="search" name="searchQuery" id="searchQuery" placeholder='start wars, hallo, etc...' />
            <button type="submit">Buscar</button>
          </form>
          <div className="content-filters">
            <input onClick={() => {
              setSort(!sort)
            }}
              type="checkbox" id="sortMovies" name="sortMovies" />
            <label for="sortMovies">Sort ASC movies by title </label>
          </div>
          <div className='content-errors'>
            <p style={{
              color: 'red',
            }}>
              {errorInput}
            </p>
          </div>
        </div>
      </header>

      <main className='content--column'>
        <p><b>Results:{searchQuery}</b></p>
        {loading ? <h3>Cargando datos...</h3> : <Movies movies={movies} hasMovies={hasMovies} />}
      </main >
    </div >
  )
}

export default App
