import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion'
import close from '../assets/images/svgs/close.svg'

export default function Navmenu({ setIsOpen }) {

    let location = useLocation()

    return (
        <motion.nav id="navmenu" initial={{ opacity: 0, x: '-2rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <img src={close} onClick={() => setIsOpen(false)} />
            <div className="navlist-container">
                <motion.div className="link-div"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '120px' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: .3, delay: .2, ease: "backInOut" }}>
                    <Link onClick={() => setIsOpen(false)} to="/" >sobre</Link>
                </motion.div>
                <motion.div className="link-div"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '120px' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: .3, delay: .4, ease: "backInOut" }}>
                    <Link onClick={() => setIsOpen(false)} to="/habilidades" >habilidades</Link>
                </motion.div>
                <motion.div className="link-div"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '120px' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: .3, delay: .6, ease: "backInOut" }}>
                    <Link onClick={() => setIsOpen(false)} to="/projetos" >projetos</Link>
                </motion.div>
                <motion.div className="link-div"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '120px' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: .3, delay: .8, ease: "backInOut" }}>
                    <Link onClick={() => setIsOpen(false)} to="/contato" >contato</Link>
                </motion.div>
            </div>
        </motion.nav>
    )
}
