import Movie from "../components/movie";
import Search from "../components/search";
import Preloader from "../components/preloader";

export default function Main({movies = [], cb, loading}) {
    return (
        <main className="container content">
            <Search cb={cb}/>
           {
               loading ? <Preloader/> : 
                    <div className="movies">
                        {movies.length ? movies.map(movie => (
                            <Movie
                                key={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                type={movie.Type}
                                id={movie.imdbID}
                                poster={movie.Poster} />
                        )) : <h4>Ничего не найдено</h4>}
                     </div>
           }
        </main>
    )
}      