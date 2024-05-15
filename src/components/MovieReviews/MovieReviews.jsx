import css from "./MovieReviews.module.css"
import { getReveiwsById } from "../../../url"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ReviewsItem from "../ReviewsItem/ReviewsItem";

export default function MovieReviews() {

    const { movieId } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchReveiwsById() {
            try {
                setLoading(true)
                const data = await getReveiwsById(movieId)
                setReviews(data)
                // console.log(data);
            } catch (error) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        fetchReveiwsById()
    }, [movieId])

    return <div>
        {loading && <Loading/>}
        {error && <Error />}
        {reviews.length === 0 && <p>Sorry, nothing found</p>}
        {reviews.length > 0 && <ReviewsItem reviews={reviews} />}
    </div>;
}

