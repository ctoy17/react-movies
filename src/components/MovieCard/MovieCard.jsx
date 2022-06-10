import { Card } from 'react-bootstrap'
import './MovieCard.css'

export default function MovieCard({ movie }){
    return(
        <Card>
            <Card.Img className="card-img-top" src={movie.poster_path}></Card.Img>
            <div className="card-overlay-caption">
            <div>
            <div >
                <Card.Text className="card-title ">
                    {movie.title}
                </Card.Text>
                <Card.Text className="card-subtitle">
                    Released {movie.release_date}
                </Card.Text>
            </div>
            </div>
            </div>
        </Card>
    )
}
<>

</>