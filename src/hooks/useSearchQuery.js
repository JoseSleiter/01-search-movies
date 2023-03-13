import { useRef, useState, useEffect } from 'react';

export const useSearchQuery = ({ Query = "" }) => {
    const [searchQuery, setSearchQuery] = useState(Query);
    const [error, setError,] = useState(null);
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = searchQuery === ''
            return
        }
        if (searchQuery === '') {
            setError("No se puede buscar una pelicula vacia")
            return
        }
        setError(null)
    }, [searchQuery]);

    return { searchQuery, setSearchQuery, error }
}