import { NavLink, useParams, Outlet} from 'react-router-dom';
import css from './MovieDetailsPage.module.css'
import { Suspense, useEffect, useState } from 'react';
import { getFilmsById } from '../../../url';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import clsx from 'clsx';


export default function MovieDetailsPage() {

    

    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [film, setFilm] = useState(null)

    useEffect(() => {
        async function fetchFilmsById() {
            try {
                setLoading(true)
                const data = await getFilmsById(movieId) 
                setFilm(data)
                // console.log(data);
            } catch (error) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
         }
        fetchFilmsById()
    }, [movieId])

    return <>
        {loading && <Loading/>}
        {error && <Error />}
        {film && <MovieInfo film={film} />}
        <p className={css.text}>Additional information</p>
        <ul className={css.list}>
            <li><NavLink to='cast' className={({ isActive }) => {
            return clsx(css.link, isActive && css.active) 
        }}>Cast</NavLink></li>
            <li><NavLink to='reviews' className={({ isActive }) => {
            return clsx(css.link, isActive && css.active) 
        }}>Reviews</NavLink></li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
         <Outlet/>   
        </Suspense>
    </>;
}