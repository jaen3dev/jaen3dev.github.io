import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import DetalhesProjeto from './pages/DetalhesProjeto'

export default function TransitionComponent() {

    const location = useLocation()
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/projetos/:id" element={<DetalhesProjeto />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </AnimatePresence>
    )
}