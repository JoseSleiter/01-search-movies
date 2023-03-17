import { useRef, useState, useEffect } from 'react';

export const useSearchQuery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
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
        if (searchQuery.length <= 3) {
            setError("Solo busquedas con mas de 3 caracteres")
            return
        }
        setError('')
    }, [searchQuery]);

    return { searchQuery, setSearchQuery, error }
}