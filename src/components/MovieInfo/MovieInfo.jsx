import { Link, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css'
import { useRef } from 'react';

export default function MovieInfo({ film }) {
    
    const location = useLocation()
    const backLinkURL = useRef(location.state ?? '/movies')
    return <div>
        <div className={css.link}>
            <Link to={backLinkURL.current}>Go back</Link>
        </div>
      <div className={css.container}>
        <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.original_title
} />
        <div className={css.info}>
            <h2>{film.title} ({film.release_date
        })</h2>
            <p>User Score: {Math.round(film.vote_average)}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <ul className={css.list}>
                {film.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
            </ul>
        </div>
    </div>
    </div>
}