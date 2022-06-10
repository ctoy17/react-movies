import ActorCard from "../../components/ActorCard/ActorCard"
import './ActorIndexPage.css';
import { Container } from "react-bootstrap";

export default function ActorPage({ movies }) {

    let obj = {}

    movies.forEach(movie => {
        movie.cast.forEach(actor => {
        obj[actor] = 1
        })
    })

    let actorList = Object.keys(obj);

    return (
        <Container className="actorList container">
                {
                    actorList.map(actor => {
                    return <ActorCard key={actor} actor={actor} />
                    })
                }
        </Container>
    )
}