import { useEffect, useState } from 'react';
import mappedMovies from '../helpers/mapped/mappedMovies';

const getMovies = async ({ searchQuery, error, signal }) => {
    if (error || !searchQuery) {
        return []
    }

    const resp = await fetch(
        `https://www.omdbapi.com/?apikey=${'44a6c08d'}&s=${searchQuery}`,
        {
            signal
        })
    const withResults = await resp.json()
    return mappedMovies(withResults?.Search || [])

}

export const useGetMovies = ({ searchQuery, error }) => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()

        getMovies({
            searchQuery,
            error,
            signal: abortController.signal
        }).then((resp) => {
            setMovies(resp)
            setHasMovies(resp.length > 0)
        }).catch(() => {
            if (abortController.signal.aborted) {
                console.warn('The user aborted the request');
            } else {
                console.error('The request failed');
            }
        })
        return () => {
            abortController.abort()
        }
    }, [searchQuery, error]);

    return {
        movies,
        hasMovies
    }
}