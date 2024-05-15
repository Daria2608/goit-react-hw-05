import { useEffect, useState } from 'react'
import css from './HomePage.module.css'
import { getFilms } from '../../../url';
import MovieList from '../../components/MovieList/MovieList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


export default function HomePage() {

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    
    useEffect(() => {
        const fetchFilms =
        async () => { 
            try {
             setLoading(true)
             const data = await getFilms();
             setFilms(data)    
            } catch (error) {
             setError(true)
            }
            finally {
             setLoading(false)
            }
        }

        fetchFilms();
    }, [])


    return <div>
        <h1 className={css.title}>Trending today</h1>
        {loading && <Loading/>}
        {error && <Error/>}
        {films.length > 0 && <MovieList films={films} />}
    </div>
    
    
}