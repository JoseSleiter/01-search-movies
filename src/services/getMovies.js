import mappedMovies from '../helpers/mapped/mappedMovies';
const API_KEY = import.meta.env.VITE_API_KEY

export const getMovies = async ({ searchQuery, error, signal }) => {
    if (error || !searchQuery) {
        return []
    }

    try {
        const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`, {
            signal
        })
        const withResults = await resp.json()
        return mappedMovies(withResults?.Search)
    } catch (e) {
        if (signal.aborted) {
            console.warn('The user aborted the request');
        } else {
            console.error('The request failed');
            throw new Error('Error searching movies')
        }
        return []
    }

}