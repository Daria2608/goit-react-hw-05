import { Link, useLocation } from 'react-router-dom'
import css from './MovieList.module.css'

export default function MovieList({ films }) {
    const location = useLocation()
    return <ul className={css.list}>
        {films.map((film => {
            return <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={location}><p>{film.original_title}</p> </Link>
            </li>
        }))}
    </ul>
}