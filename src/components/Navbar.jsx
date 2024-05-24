import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu from '../assets/images/svgs/menu.svg'

export default function Navbar() {
    const location = useLocation()

    return (
        <>
            <nav className={location.pathname == '/habilidades' || location.pathname == '/projetos' ? 'nav-red-bg' : null}>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : null}>sobre</NavLink>
                <NavLink to="/habilidades" className={({ isActive }) => isActive ? "selected" : null}>habilidades</NavLink>
                <NavLink to="/projetos" className={({ isActive }) => isActive ? "selected" : null}>projetos</NavLink>
                <NavLink to="/contato" className={({ isActive }) => isActive ? "selected" : null}>contato</NavLink>
            </nav>

            <img className="ham-menu" src={menu}/>
        </>
    )
}
