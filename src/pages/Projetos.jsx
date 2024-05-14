import React from "react"
import { motion } from "framer-motion"

export default function Projetos() {

    return (
        <section id="projetos">
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