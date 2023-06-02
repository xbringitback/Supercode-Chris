import MovieList from './MovieList'
import MovieItem from './MovieItem'

const Movie = () => {
    console.log(MovieList);

    return (
        <section className='movies'>
            {MovieList.map((item, i) => <MovieItem movie={item} key={i} />)}
        </section>
    )
}

export default Movie