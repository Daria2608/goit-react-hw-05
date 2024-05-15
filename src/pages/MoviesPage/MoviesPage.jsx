
import css from './MoviesPage.module.css'
import { searchMovie } from '../../../url'
import { useSearchParams } from 'react-router-dom'
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function MoviesPage({value, onSearch}) {

    const [params, setParams] = useSearchParams();
    const paramQuery = params.get('query') ?? '';

    const [films, setFilms] = useState([])
    // const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const changeQuery = (newQuery) => {
        if (newQuery === '') {
            return alert('It`s required!')
        }
        params.set('query', newQuery)
        setParams(params)
    }


    useEffect(() => {
        if (!paramQuery) {
            return
        }
        async function searchFilm() {
            try {
                setLoading(true)
                const data = await searchMovie(paramQuery)
                setFilms(data)

            } catch (error) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        searchFilm()
    }, [paramQuery])

    return <div className={css.container}> 
        <form onSubmit={(e) => changeQuery(e.target.elements.query.value.trim())}>
        <input className={css.input} type="text" name='query' />
        <button className={css.button}  type="submit">Search</button>  
        </form>
        {loading && <Loading/>}
        {error && <Error />}
        {paramQuery && films.length === 0 && <NotFoundPage/>}
        {films.length > 0 && <MovieList films={films} />}

    </div>
}