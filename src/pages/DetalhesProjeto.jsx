import React from "react"
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import jsonData from '../assets/data/codeProjects.json';
import { Link } from "react-router-dom";
import returnBl from '../assets/images/svgs/return-bl.svg'
import returnWt from '../assets/images/svgs/return-wt.svg'
import githubBl from '../assets/images/svgs/github.svg'
import githubWt from '../assets/images/svgs/github-wt.svg'
import linktoBl from '../assets/images/svgs/linkto-bl.svg'
import linktoWt from '../assets/images/svgs/linkto-wt.svg'

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
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: '0', height: '4rem' }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: .75, ease: 'backInOut' }}
            />

            <motion.div className="thumbnail" key='thumbnail'
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: '0', transition: { duration: .75, delay: .5, ease: 'backInOut' } }}
                exit={{ opacity: 0 }}>
                <div className="content">
                    <span className="mobile">
                        <Link to='/projetos'><img src={returnBl} />Galeria de projetos</Link>
                    </span>
                    <span className="desktop">
                        <Link to='/projetos'><img src={returnWt} />Galeria de projetos</Link>
                    </span>
                    <h1>{projeto.name}</h1>
                    {projeto.linkImages && <img src={`/pngs/${projeto.linkImages[0]}`} />}
                    <div className="mobile">
                        <div className="links">
                            <Link to={projeto.githubUrl} target="_blank"><img src={githubBl} /></Link>
                            {projeto.websiteUrl != '' ? <Link to={projeto.websiteUrl} target="_blank"><img src={linktoBl} /></Link> : null}
                        </div>
                    </div>
                    <div className="desktop">
                        <div className="links">
                            <Link to={projeto.githubUrl} target="_blank"><img src={githubWt} /></Link>
                            {projeto.websiteUrl != '' ? <Link to={projeto.websiteUrl} target="_blank"><img src={linktoWt} /></Link> : null}
                        </div>
                    </div>
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