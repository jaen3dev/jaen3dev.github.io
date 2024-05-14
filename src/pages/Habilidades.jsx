import React from "react"
import { motion } from "framer-motion"
import html5 from '../assets/images/svgs/html5.svg'
import javascript from '../assets/images/svgs/javascript.svg'
import css3 from '../assets/images/svgs/css3.svg'
import sass from '../assets/images/svgs/sass.svg'
import react from '../assets/images/svgs/react.svg'
import visualStudio from '../assets/images/svgs/visual-studio.svg'
import git from '../assets/images/svgs/git.svg'
import githubWt from '../assets/images/svgs/github-wt.svg'
import figma from '../assets/images/svgs/figma.svg'
import blender from '../assets/images/svgs/blender-3d.svg'
import unity from '../assets/images/svgs/unity.svg'

export default function Habilidades() {

    return (
        <section id="habilidades">

            <div className="content">
                <h2>As habilidades, ferramentas e tecnologias que eu uso<br /> nos meus projetos.</h2>

                <h2>Desenvolvimento Web:</h2>
                <div className="stack">
                    <span><img src={html5} />HTML5</span>
                    <span><img src={css3} />CSS3</span>
                    <span><img src={javascript} />JAVASCRIPT</span>
                    <span><img src={sass} />SASS</span>
                    <span><img src={react} />REACT</span>
                    <span><img src={git} />GIT</span>
                    <span><img src={githubWt} />GITHUB</span>
                    <span><img src={visualStudio} />VSCODE</span>
                    <span><img src={figma} />FIGMA</span>
                </div>
                <h2>Modelagem 3D:</h2>
                <div className="stack">
                    <span><img src={blender} />BLENDER</span>
                    <span><img src={unity} />UNITY</span>
                </div>
            </div>
            {location.pathname === '/habilidades' &&
                <motion.div className="red-skewed-bg" key={location.pathname}
                    initial={{
                        opacity: 0,
                        y: '100%'
                    }}
                    animate={{
                        opacity: 1,
                        height: '130vh',
                        y: '0vh'
                    }}
                    exit={{
                        opacity: 0,
                        y: '100%'
                    }}
                    transition={{
                        duration: .75,
                        ease: 'backInOut'
                    }} />
            }
        </section>

    )
}
