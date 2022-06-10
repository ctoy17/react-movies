import MovieCard from "../../components/MovieCard/MovieCard";
import {Container} from "react-bootstrap";
import './MovieIndexPage.css'
import { Link } from "react-router-dom";



export default function MovieIndexPage({ movies }) {
    return (
            <Container> 
                    {movies.map((movie, index)=>
                        <Link to={`/movies/${movie.title}`}>
                        <MovieCard movie={movie} key={index}/>
                        </Link>
                    )}
            </Container>
    );
}
