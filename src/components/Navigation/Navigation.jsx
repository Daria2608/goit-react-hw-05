import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css'

export default function Navigation() {
    return <nav>
        <NavLink to="/" className={({ isActive }) => {
            return clsx(css.link, isActive && css.active) 
        }}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => {
            return clsx(css.link, isActive && css.active) 
        }}>Movies</NavLink> 
      </nav>
}