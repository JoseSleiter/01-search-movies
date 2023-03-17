import './App.css';
import { Movies } from './components/movies';
import { useSearchQuery, useGetMovies } from './hooks';

function App() {
  // controlled-Way
  const { searchQuery, setSearchQuery, errorInput } = useSearchQuery()
  const { movies, hasMovies, loading } = useGetMovies({ searchQuery, errorInput })

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
        <h1>Search your movies</h1>
        <form className='content--row form-content' onSubmit={handleSubmit} >
          <input style={{
            border: '1px solid transparent',
            borderColor: errorInput ? 'red' : 'transparent'
          }} onChange={hanldeChange} type="search" name="searchQuery" id="searchQuery" placeholder='start wars, hallo, etc...' />
          <button type="submit">Buscar</button>
        </form>
        <p style={{
          color: 'red',
        }}>
          {errorInput}
        </p>
      </header>

      <main className='content--column'>
        <p><b>Results:{searchQuery}</b></p>
        {loading ? <h3>Cargando datos...</h3> : <Movies movies={movies} hasMovies={hasMovies} />}
      </main >
    </div >
  )
}

export default App
