import './App.css';
import { Movies } from './components/movies';
import { useSearchQuery } from './hooks';

function App() {
  // controlled-Way
  const { searchQuery, setSearchQuery, error } = useSearchQuery({ Query: "" })
  console.log('Render', searchQuery)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Uncontrolled-Way
    // const formData = new FormData(e.target)
    // const { searchQuery } = Object.fromEntries(formData)
    console.log(searchQuery)
  }

  const hanldeChange = (e) => {
    const newValue = e.target.value
    setSearchQuery(newValue)
  }



  return (
    <div className='content-app'>

      <header>
        <h1>Search your movies</h1>
        <form onSubmit={handleSubmit} className='form-content'>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={hanldeChange} type="search" name="searchQuery" id="searchQuery" placeholder='start wars, hallo, etc...' />
          <button type="submit">Buscar</button>
        </form>
        <p style={{
          color: 'red',
        }}>
          {error}
        </p>
      </header>

      <main>
        <p><b>Results:</b></p>
        <Movies />
      </main >
    </div >
  )
}

export default App
