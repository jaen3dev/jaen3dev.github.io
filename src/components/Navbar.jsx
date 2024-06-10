import React from "react";
import Navmenu from './Navmenu'
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import menuBlack from '../assets/images/svgs/ham-menu-bl.svg'
import menuWhite from '../assets/images/svgs/ham-menu-wt.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(()=>{
        document.body.style.overflow = isOpen? 'hidden' : 'unset'
        window.scrollTo(0, 0)
    },[isOpen])

    let location = useLocation()

    return (
        <>
            <nav id="navbar" className={location.pathname === '/habilidades' || location.pathname.startsWith('/projetos') ? 'nav-red-bg' : 'nav-white-bg'}>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : null}>sobre</NavLink>
                <NavLink to="/habilidades" className={({ isActive }) => isActive ? "selected" : null}>habilidades</NavLink>
                <NavLink to="/projetos" className={({ isActive }) => isActive ? "selected" : null}>projetos</NavLink>
                <NavLink to="/contato" className={({ isActive }) => isActive ? "selected" : null}>contato</NavLink>
            </nav>
            <AnimatePresence>
                {isOpen && <Navmenu setIsOpen={setIsOpen} /> }
            </AnimatePresence>

            <img className="ham-menu" src={location.pathname === '/habilidades' || location.pathname.startsWith('/projetos') ? menuWhite : menuBlack} onClick={() => setIsOpen(true)} />
        </>
    )
}
