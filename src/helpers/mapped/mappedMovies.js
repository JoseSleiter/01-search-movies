export const mappedMovies = (movies) => {
    return movies.map(Poster => ({
        id: Poster.imdbID,
        title: Poster.Title,
        imgUrl: Poster.Poster,
        type: Poster.Type,
        year: Poster.Year
    }))
}