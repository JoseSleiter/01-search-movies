import { useState } from 'react';
import './App.css';
import { Movies } from './components/movies';


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
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
          <input onChange={hanldeChange} type="search" name="searchQuery" id="searchQuery" placeholder='start wars, hallo, etc...' />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <p><b>Results:</b></p>
        <Movies />
      </main >
    </div >
  )
}

export default App
