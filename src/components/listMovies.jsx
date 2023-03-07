
export const ListMovies = ({ movies }) => {
    return (
        <>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p><b>year:</b> {movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))}
            </ul>
        </>
    )
}