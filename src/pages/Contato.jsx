import React from "react"
import { motion } from "framer-motion"

export default function Contato() {

    return (
        <section id="contato">
        
        {location.pathname === '/contato' &&
                <motion.div className="red-skewed-bg" key={location.pathname}
                    initial={{
                        opacity: 0,
                        x: "-100%",
                        rotate: 30
                    }}
                    animate={{
                        opacity: 1,
                        x: "50%",
                        y: "10%"
                    }}
                    exit={{
                        opacity:0,
                        x: "100%"
                    }}
                    transition={{
                        duration: .75,
                        ease:'backInOut'
                    }} />
            }
        </section>
    )
}
