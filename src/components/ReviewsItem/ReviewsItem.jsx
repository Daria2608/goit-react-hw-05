import css from './ReviewsItem.module.css'

export default function ReviewsItem({ reviews }) {
    // console.log(reviews);
    return <div>
        <ul className={css.list}>
            {reviews.map(review => (<li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>)) }
        </ul>
    </div>
}