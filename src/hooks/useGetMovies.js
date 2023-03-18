import { useEffect, useState, useMemo } from 'react';
import { getMovies as serviceGetMovies } from '../services/getMovies';
import debounce from 'just-debounce-it'
import { useCallback } from 'react';

export const useGetMovies = ({ searchQuery, sort, errorInput }) => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)
    const [loading, setLoading] = useState(false)

    const getMoviesDebounce = useCallback(
        debounce(async ({ searchQuery, errorInput, abortController }) => {
            const newMovies = await serviceGetMovies({
                searchQuery,
                error: errorInput,
                signal: abortController.signal
            })
            setMovies(newMovies)
            setHasMovies(newMovies.length > 0)
            setLoading(false)
        }, 300), [])

    useEffect(() => {
        const abortController = new AbortController()
        setLoading(true)
        getMoviesDebounce({
            searchQuery,
            errorInput,
            abortController
        })
        return () => {
            abortController.abort()
            setLoading(false)
        }
    }, [searchQuery, errorInput]);

    const sortedMovies = useMemo(() => {
        return sort && hasMovies ?
            [...movies]?.sort((a, b) => a?.title?.localeCompare(b?.title)) : movies
    }, [sort, movies])

    return {
        movies: sortedMovies,
        hasMovies,
        loading
    }
}