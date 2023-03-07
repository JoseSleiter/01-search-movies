import withResults from './../mocks/getMovies-ok.json';
import withoutResults from './../mocks/getMovies-error.json'
import { ListMovies } from './listMovies';
import { NotFoundMovies } from './notFoundMovies';
import { useEffect, useState } from 'react';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)
    useEffect(() => {
        setMovies(withResults.Search)
        setHasMovies(withResults.Search.length > 0)
    }, []);

    return (
        <>
            <div className='content-movie'>
                {hasMovies ? <ListMovies movies={movies} /> : <NotFoundMovies />}
            </div>
        </>
    )
}