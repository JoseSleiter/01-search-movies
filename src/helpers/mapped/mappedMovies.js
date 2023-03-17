const mappedMovies = (movies) => {
    return movies?.map(Poster => ({
        id: Poster.imdbID,
        title: Poster.Title,
        imgUrl: Poster.Poster !== 'N/A' ? Poster.Poster : "https://dummyimage.com/600x400/000/fff",
        type: Poster.Type,
        year: Poster.Year
    })) || []
}

export default mappedMovies