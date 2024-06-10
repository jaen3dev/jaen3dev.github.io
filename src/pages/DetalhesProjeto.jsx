import React from "react"
import { useParams } from 'react-router-dom'
import { motion, useIsPresent } from "framer-motion"
import jsonData from '../assets/data/codeProjects.json';


export default function DetalhesProjeto() {
    const params = useParams()

    const [projeto, setProjeto] = React.useState([])

    React.useEffect(() => {
        setProjeto(jsonData[params.id])
    }, [])

    React.useEffect(() => {
        setProjeto(jsonData[params.id])
    }, [params.id])

    return (

        <motion.section id="detalhes-projeto" key={params.id}>
            <motion.div className="red-skewed-bg-desktop" key='red-skewed-bg-desktop'
                initial={{ opacity: 0, x: '-100%', height: '100%' }}
                animate={{ opacity: 1, x: '0', width: '50%' }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: .75, ease: 'backInOut' }}
            />

            <motion.div className="red-skewed-bg-mobile" key='red-skewed-bg-mobile'
                initial={{ opacity: 0, y: '-100%'}}
                animate={{ opacity: 1, y: '0', height:'4rem' }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: .75, ease: 'backInOut' }}
            />

            <motion.div className="thumbnail" key='thumbnail'
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: '0', transition: { duration: .75, delay: .5, ease: 'backInOut' } }}
                exit={{ opacity: 0 }}>
                <div className="content">
                    <h1>{projeto.name}</h1>
                    {projeto.linkImages && <img src={`/pngs/${projeto.linkImages[0]}`} />}
                </div>
            </motion.div>

            <motion.div className="description" key='description'
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0', transition: { duration: .75, delay: 1, ease: 'backInOut' } }}
                exit={{ opacity: 0 }}>
                <div className="content">
                    <h1>Sobre</h1>
                    {projeto.name && projeto.longDescription.map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>
                    })}
                    <h1>Tecnologias Usadas</h1>
                    <ul>
                        {projeto.name && projeto.tecnologies.map((tech, index) => {
                            return <li key={index}>{tech}</li>
                        })}
                    </ul>
                </div>
            </motion.div>
        </motion.section>

    )
}