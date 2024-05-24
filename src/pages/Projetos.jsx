import React from "react"
import { motion } from "framer-motion"
import jsonData from '../assets/data/codeProjects.json';

export default function Projetos() {

    const [filtered, setFiltered] = React.useState([])
    const [filterValues, setFilterValues] = React.useState([true, true, true, true])
 
    React.useEffect(() => {
        setFiltered(jsonData)
    }, [])

    function handleChange(event) {
        if(event.target.dataset.position == 0 && filterValues[0] == false){
            setFilterValues(prev=>{
                const newValue = [...prev]
                newValue.fill(true, 0, newValue.length -1)
                return newValue
            })
            
        }

        setFilterValues(prev => {
            const newValue = [...prev]
            newValue[event.target.dataset.position] = !newValue[event.target.dataset.position]
            return newValue
        })

        checkIfAllChecked()
    }

    function checkIfAllChecked(){
        const filterValuesMinusFirst = [...filterValues]
        filterValuesMinusFirst.shift()
        return filterValuesMinusFirst.reduce((acc, curr) => acc && curr, true)
    }

    const filteredElements = filtered.map(project => (
        <div key={project.id} className="project">
            <p>{project.name}</p>
            <img src={`/pngs/${project.linkImages[0]}`} />
            <p>{project.description}</p>
        </div>
    ))

    return (
        <section id="projetos">

            <div className="filters">
                <label className="form-control">
                    <input type="checkbox" name="todos" data-position="0" onChange={handleChange} checked={checkIfAllChecked()}/>
                    TODOS
                </label>
                <label className="form-control">
                    <input type="checkbox" name="react" data-position="1" onChange={handleChange} checked={filterValues[1]} />
                    REACT
                </label>
                <label className="form-control">
                    <input type="checkbox" name="framer-motion" data-position="2" onChange={handleChange} checked={filterValues[2]} />
                    FRAMER MOTION
                </label>
                <label className="form-control">
                    <input type="checkbox" name="threeD" data-position="3" onChange={handleChange} checked={filterValues[3]} />
                    3D
                </label>
            </div>

            <div className="filtered-gallery">
                {filteredElements}
            </div>



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