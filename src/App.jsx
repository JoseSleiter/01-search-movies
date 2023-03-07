import './App.css';
import { Movies } from './components/movies';


function App() {
  return (
    <div className='content-app'>

      <header>
        <h1>Search your movies</h1>
        <form className='form-content'>
          <input type="search" name="search-movie" id="search-movie" placeholder='start wars, hallo, etc...' />
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
