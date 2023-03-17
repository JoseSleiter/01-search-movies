import { ListMovies } from './listMovies';
import { NotFoundMovies } from './notFoundMovies';

export const Movies = ({ movies, hasMovies }) => {
    return (
        <>
            <div className='content--column content__movies'>
                {hasMovies ? <ListMovies movies={movies} /> : <NotFoundMovies />}
            </div>
        </>
    )
}