import css from './CastItem.module.css'

export default function CastItem({ cast }) {
    // console.log(cast);
    return <ul className={css.list}>
        {cast.map(person => (<li key={person.cast_id}>
            <div>
            <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt="" />
                <p>{person.name}</p>
                <p>Character: {person.character}</p>
            </div>
        </li>))}
    </ul>
}