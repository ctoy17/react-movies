import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return(
        <nav>
            <Link to="/movies">Movies List</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors List</Link>
        </nav>
    );
}