import css from './MovieCast.module.css'
import { getCastById } from '../../../url';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import CastItem from '../CastItem/CastItem';

export default function MovieCast() {


    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [cast, setCast] = useState([])

    useEffect(() => {
        async function fetchCastById() {
            try {
                setLoading(true)
                const data = await getCastById(movieId)
                setCast(data)
            } catch (error) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        fetchCastById()
    }, [movieId])
    // console.log(cast);

    return <div>
        {loading && <Loading/>}
        {error && <Error />}
        {cast.length === 0 && <p>Sorry, nothing found</p>}
        {cast && <CastItem cast={cast} />}
    </div>;
}