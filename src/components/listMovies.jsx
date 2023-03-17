
export const ListMovies = ({ movies }) => {
    return (
        <>
            <ul className="content__movies__items">
                {movies.map(movie => (
                    <li className="container-movie" key={movie.id}>
                        <div className="content--column container__data">
                            <div className="container__img">
                                <img className="img--fit" src={movie.imgUrl} alt={movie.title} />
                            </div>
                            <div className="content--column container__info">
                                <h3>{movie.title}</h3>
                                <p>{movie.year}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}