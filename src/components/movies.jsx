import withResults from './../mocks/getMovies-ok.json';
import withoutResults from './../mocks/getMovies-error.json'
import { ListMovies } from './listMovies';
import { NotFoundMovies } from './notFoundMovies';
import { useEffect, useState } from 'react';
import { mappedMovies } from '../helpers/mapped/mappedMovies'

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)
    useEffect(() => {
        setMovies(mappedMovies(withResults.Search))
        setHasMovies(withResults.Search.length > 0)
    }, []);

    return (
        <>
            <div className='content-movies'>
                {hasMovies ? <ListMovies movies={movies} /> : <NotFoundMovies />}
            </div>
        </>
    )
}