import { useEffect, useState } from 'react';
import { getMovies as serviceGetMovies } from '../services/getMovies';

export const useGetMovies = ({ searchQuery, errorInput }) => {
    const [movies, setMovies] = useState([]);
    const [hasMovies, setHasMovies] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const abortController = new AbortController()
        const getMovies = async (abortController) => {
            const newMovies = await serviceGetMovies({
                searchQuery,
                error: errorInput,
                signal: abortController.signal
            })
            setMovies(newMovies)
            setHasMovies(newMovies.length > 0)
            setLoading(false)
        }

        setLoading(true)
        getMovies(abortController)
        return () => {
            abortController.abort()
            setLoading(false)
        }
    }, [searchQuery, errorInput]);

    return {
        movies,
        hasMovies,
        loading
    }
}