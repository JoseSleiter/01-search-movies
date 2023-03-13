import { useState, useEffect } from 'react';
import withResults from "./../mocks/getMovies-ok"

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)
    useEffect(() => {
        setMovies(withResults.Search)
        setHasMovies(withResults.Search.length > 0)
    }, []);

    return {
        movies,
        hasMovies
    }
}