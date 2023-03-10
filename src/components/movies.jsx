import { useMovies } from '../hooks/useGetMovies';
import { ListMovies } from './listMovies';
import { NotFoundMovies } from './notFoundMovies';

export const Movies = () => {
    const { movies, hasMovies } = useMovies()
    return (
        <>
            <div className='content-movies'>
                {hasMovies ? <ListMovies movies={movies} /> : <NotFoundMovies />}
            </div>
        </>
    )
}