import './ActorCard.css';
import { Card } from 'react-bootstrap'

export default function ActorCard({actor}) {

return (
    <Card className="card">
        <Card.Img className="card-img-top" src="https://source.unsplash.com/mk7D-4UCfmg"></Card.Img>
        <div className="card-overlay-caption">
            <div>
            <Card.Text className="card-title">{actor}</Card.Text>
        </div>
        </div>
    </Card>
);
}