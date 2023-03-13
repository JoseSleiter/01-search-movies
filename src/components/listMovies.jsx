
export const ListMovies = ({ movies }) => {
    return (
        <>
            <ul>
                {movies.map(movie => (
                    <li className="container-movie" key={movie.id}>
                        <div className="container-data">
                            <div className="container-info">
                                <h3>{movie.title}</h3>
                                <p><b>year:</b> {movie.year}</p>
                            </div>
                            <div className="container-img">
                                <img src={movie.imgUrl} alt={movie.title} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}