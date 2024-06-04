import React from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useIsPresent } from "framer-motion"
import jsonData from '../assets/data/codeProjects.json';


export default function DetalhesProjeto() {
    const params = useParams()
    const isPresent = useIsPresent()

    const [projeto, setProjeto] = React.useState([])

    React.useEffect(() => {
        setProjeto(jsonData[params.id])
    }, [])

    React.useEffect(() => {
        setProjeto(jsonData[params.id])
    }, [params.id])

    console.log(projeto)


    return (
        <motion.section id="detalhes-projeto" key={location.pathname}>

            <div className="thumbnail">
                <div className="content">
                    <h1>{projeto.name}</h1>
                    {projeto.linkImages && <img src={`/pngs/${projeto.linkImages[0]}`} />}
                </div>
                {isPresent && <motion.div className="red-skewed-bg" key={`/projetos/${params.id}`}
                    initial={{
                        opacity: 0,
                        x: '-100%',
                        height: '100%',
                    }}
                    animate={{
                        opacity: 1,
                        x: '0',
                        width: '50%',
                    }}
                    exit={{
                        opacity: 0,
                        backgroundColor: 'purple',
                        x: "-100%",
                        width: '100%'
                    }}
                    transition={{
                        duration: .75,
                        ease: 'backInOut'
                    }} />
                }
            </div>
            <div className="description">
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
            </div>

        </motion.section>
    )
}