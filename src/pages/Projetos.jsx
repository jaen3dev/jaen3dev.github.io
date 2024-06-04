import React from "react"
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"
import jsonData from '../assets/data/codeProjects.json';

export default function Projetos() {

    const [data, setData] = React.useState([])
    const [filtered, setFiltered] = React.useState([])
    const [filterVariables, setFilterVariables] = React.useState([])

    React.useEffect(() => {
        setData(jsonData)
        setFiltered(data)
    }, [data])

    React.useEffect(() => {
        handleFilter()
    }, [filterVariables])

    function handleChange(event) {

        setFilterVariables(prev => {
            const newValue = [...prev]

            if (newValue.includes('TODOS')) {
                newValue.splice(newValue.indexOf('TODOS'), 1)
            }

            if (newValue.includes(event.target.value)) {
                newValue.splice(newValue.indexOf(event.target.value), 1)
            } else {
                newValue.push(event.target.value)
            }

            return newValue
        })

        handleFilter()
    }

    function handleFilter() {

        function filtro(objetos, filtros) {
            return objetos.filter(objeto => {
                return filtros.every(filtro => objeto.tecnologies.includes(filtro))
            })
        }

        const objetosFiltrados = filtro(data, filterVariables)

        setFiltered(objetosFiltrados)
    }

    function handleClick() {
        setFilterVariables([])
    }

    const filteredElements = filtered.map(project => (
        <Link to={`/projetos/${project.id}`} key={project.id} className="project">
            <motion.div initial={{ opacity: 0, x: '-1rem' }} animate={{ x: 0, opacity: 1, transition: { duration: .5, delay: (project.id + 1) * 0.1 } }} exit={{ opacity: 0, transition: { duration: .2 } }} layout>
                <h1>{project.name}</h1>
                <img src={`/pngs/${project.linkImages[0]}`} />
                <p>{project.shortDescription}</p>
                <div className="tags">
                    {project.tecnologies.map(tech => {
                        return <span key={tech}>{tech}</span>
                    })}
                </div>
            </motion.div>
        </Link>
    ))

    return (
        <section id="projetos">
            <motion.div className="filters" initial={{ x: '-400px', opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: .6 } }} exit={{ opacity: 0 }}>
                <label className="form-control">
                    <input type="checkbox" name="react" value="REACT" onChange={handleChange} checked={filterVariables.includes('REACT')} />
                    REACT
                </label>
                <label className="form-control">
                    <input type="checkbox" name="react-router" value="REACT-ROUTER" onChange={handleChange} checked={filterVariables.includes('REACT-ROUTER')} />
                    REACT-ROUTER
                </label>
                <label className="form-control">
                    <input type="checkbox" name="framer-motion" value="FRAMER-MOTION" onChange={handleChange} checked={filterVariables.includes('FRAMER-MOTION')} />
                    FRAMER MOTION
                </label>
                <label className="form-control">
                    <input type="checkbox" name="threeD" value="3D" onChange={handleChange} checked={filterVariables.includes('3D')} />
                    3D
                </label>
                <label className="form-control">
                    <input type="checkbox" name="scss" value="SCSS" onChange={handleChange} checked={filterVariables.includes('SCSS')} />
                    SCSS
                </label>
                <label className="form-control">
                    <input type="checkbox" name="tauri" value="TAURI" onChange={handleChange} checked={filterVariables.includes('TAURI')} />
                    TAURI
                </label>
                <AnimatePresence mode="popLayout">
                    {filterVariables.length > 0 && <motion.button onClick={handleClick} key='button' layout
                        initial={{ opacity: 0, color: '#c8102e', whiteSpace: 'nowrap' }}
                        animate={
                            { opacity: 1, color: 'white', height: 'inherit', transition: { duration: 1 } }
                        }
                        exit={
                            { opacity: 0, width: 0, y: '-1rem', transition: { duration: .2 } }
                        }
                    >REMOVER FILTROS</motion.button>}
                </AnimatePresence>
            </motion.div>

                <motion.div className="filtered-gallery"
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: .5,
                        ease: 'backInOut'
                    }} >
                    <AnimatePresence mode="popLayout">
                        {filteredElements}
                    </AnimatePresence>
                </motion.div>
            {location.pathname === '/projetos' &&
                <motion.div className="red-skewed-bg" key={location.pathname}
                    initial={{
                        opacity: 0,
                        y: "-100%"
                    }}
                    animate={{
                        opacity: 1,
                        height: '5rem',
                        y: "-.5rem"
                    }}
                    exit={{
                        opacity: 0,
                        y: "-100%"
                    }}
                    transition={{
                        duration: .75,
                        ease: 'backInOut'
                    }} />
            }
        </section>
    )
}