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

const codeSpanVariant = {
    initial: {
        opacity: 0,
        y: '-4rem',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 1,
            staggerChildren: .1
        }
    }
};

const threeDSpanVariant = {
    initial: {
        opacity: 0,
        y: '-4rem',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 2.2,
            staggerChildren: .1
        }
    }
};

export default function Habilidades() {

    return (
        <section id="habilidades">

            <div className="content">
                <motion.h2
                    initial={{ opacity: 0, x: '-100px' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .75, ease: 'backInOut', delay: .2 }}>
                    As habilidades, ferramentas e tecnologias que eu uso<br /> nos meus projetos.
                </motion.h2>

                <motion.h2
                    initial={{ opacity: 0, x: '-100px' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .75, ease: 'backInOut', delay: .4 }}>
                    Desenvolvimento Web:
                </motion.h2>

                <motion.div
                    className="stack" variants={codeSpanVariant} initial='initial' animate='animate'>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={html5} />} HTML5</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={css3} />} CSS3</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={javascript} />} JAVASCRIPT</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={sass} />} SASS</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={react} />} REACT</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={visualStudio} />} VSCODE</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={git} />} GIT</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={githubWt} />} GITHUB</motion.span>
                    <motion.span variants={codeSpanVariant}>{<span>Loading...</span> && <img src={figma} />} FIGMA</motion.span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, x: '-100px' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .75, ease: 'backInOut', delay: 1.6 }}>
                    Modelagem 3D:
                </motion.h2>

                <motion.div
                    className="stack" variants={threeDSpanVariant} initial='initial' animate='animate'>
                    <motion.span variants={threeDSpanVariant}><img src={blender} />BLENDER</motion.span>
                    <motion.span variants={threeDSpanVariant}><img src={unity} />UNITY</motion.span>
                </motion.div>
            </div>

            {location.pathname === '/habilidades' &&
                <motion.div className="red-skewed-bg"
                    key={location.pathname}
                    initial={{
                        opacity: 0,
                        y: '100%'
                    }}
                    animate={{
                        opacity: 1,
                        height: '100%',
                        y: '0'
                    }}
                    exit={{
                        opacity: 0,
                        y: '100%'
                    }}
                    transition={{
                        duration: .75,
                        ease: 'backInOut'
                    }}
                />
            }
        </section>

    )
}
