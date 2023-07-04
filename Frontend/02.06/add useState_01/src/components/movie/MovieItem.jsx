const MovieItem = (props) => {

    return (
        <article className="movie-item">
            <p>{props.movie.title}</p>
            <p>{props.movie.year}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.duration}</p>
            <p>{props.movie.rate}</p>
            <p>{props.movie.genre[0]}</p>
            <p>{props.movie.genre[1]}</p>
            <p>{props.movie.genre[2]}</p>
            <p>{props.movie.genre[3]}</p>
        </article>
    )
}
export default MovieItem