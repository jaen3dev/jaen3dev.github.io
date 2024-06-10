import React from "react"
import { motion } from "framer-motion"

export const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};


export default function Contato() {

    return (
        <section id="contato">

            <div className="mobile">
                <div className="content">
                    <motion.h1
                        key="Vamos"
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0 }}
                    >
                        {'Vamos'.split("").map((char, i) => (
                            <motion.span key={`${char}-${i}`} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                        <br />
                        {'conversar?'.split("").map((char, i) => (
                            <motion.span key={`${char}-${i}`} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}

                        <motion.span className="underscore"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}>_</motion.span>
                    </motion.h1>

                    <motion.div className="contact-info"
                        initial={{ opacity: 0, x: '-4rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                        <motion.div className="social"
                            initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .3 }}>
                            <span>E-mail:</span>
                            <a href="mailto:jaen3dev@proton.me" target="_blank">jaen_dev@protonmail.com</a>
                        </motion.div>
                        <motion.div className="social"
                            initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .5 }}>
                            <span>Linked-in:</span>
                            <a href="https://www.linkedin.com/in/jean-carlos-ca/" target="_blank">@jean-carlos-ca</a>
                        </motion.div>
                        <motion.div className="social"
                            initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .7 }}>
                            <span>Github:</span>
                            <a href="https://github.com/jaen3dev" target="_blank">@jaen3dev</a>
                        </motion.div>
                        <motion.div className="social"
                            initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .9 }}>
                            <span>XTwitter:</span>
                            <a href="https://x.com/jaen3dev" target="_blank">@jaen3dev</a>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            <div className="desktop">
                {location.pathname === '/contato' &&
                    <>
                        <div className="content">
                            <motion.h1
                                key="Vamos"
                                variants={sentenceVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0 }}
                            >
                                {'Vamos'.split("").map((char, i) => (
                                    <motion.span key={`${char}-${i}`} variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                                <br />
                                {'conversar?'.split("").map((char, i) => (
                                    <motion.span key={`${char}-${i}`} variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))}

                                <motion.span className="underscore"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.6 }}>_</motion.span>
                            </motion.h1>

                            <motion.div className="contact-info"
                                initial={{ opacity: 0, x: '-4rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                                <motion.div className="social"
                                    initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .3 }}>
                                    <span>E-mail:</span>
                                    <a href="mailto:jaen3dev@proton.me" target="_blank">jaen_dev@protonmail.com</a>
                                </motion.div>
                                <motion.div className="social"
                                    initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .5 }}>
                                    <span>Linked-in:</span>
                                    <a href="https://www.linkedin.com/in/jean-carlos-ca/" target="_blank">@jean-carlos-ca</a>
                                </motion.div>
                                <motion.div className="social"
                                    initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .7 }}>
                                    <span>Github:</span>
                                    <a href="https://github.com/jaen3dev" target="_blank">@jaen3dev</a>
                                </motion.div>
                                <motion.div className="social"
                                    initial={{ opacity: 0, x: '-1rem' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ delay: .9 }}>
                                    <span>XTwitter:</span>
                                    <a href="https://x.com/jaen3dev" target="_blank">@jaen3dev</a>
                                </motion.div>
                            </motion.div>

                        </div>
                        <motion.div className="red-skewed-bg" key={location.pathname}
                            initial={{
                                opacity: 0,
                                x: "200%",
                                rotate: 30
                            }}
                            animate={{
                                opacity: 1,
                                x: "50%",
                                y: "10%"
                            }}
                            exit={{
                                opacity: 0,
                                x: "100%"
                            }}
                            transition={{
                                duration: .75,
                                ease: 'backInOut'
                            }} />
                    </>

                }
            </div>


        </section>
    )
}
