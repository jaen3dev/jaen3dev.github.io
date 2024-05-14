import React from "react"
import { motion } from "framer-motion"
import linkedin from '../assets/images/svgs/linkedin.svg'
import github from '../assets/images/svgs/github.svg'
import protonmail from '../assets/images/svgs/protonmail.svg'

export default function Home() {


    return (
        <section id="home">

            <div className="mobile">
                <div className="content">
                    <p>Jean Carlos,<br />desenvolvedor frontend <br />entusiasta 3D.</p>
                    <div className="threeD-element">3D</div>
                    <div className="socials">
                        <a href="https://github.com/jaen3dev" target="_blank"><img src={github} alt="Github logo, it's a squid." /></a>
                        <a href="mailto:jaen3dev@proton.me"><img src={protonmail} alt="Protonmail logo, it's an open card." /></a>
                        <a href="https://www.linkedin.com/in/jean-carlos-ca/" target="_blank"><img src={linkedin} alt="Linkedin logo, it's the letters i and n in lowercase" /></a>
                    </div>
                </div>

            </div>

            <div className="desktop">
                {location.pathname === '/' &&
                    <>
                        <div className="content">
                            <div className="intro-and-socials">
                                <p>Jean Carlos,<br />desenvolvedor frontend <br />entusiasta 3D.</p>
                                <div className="socials">
                                    <a href="https://github.com/jaen3dev" target="_blank"><img src={github} alt="Github logo, it's a squid." /></a>
                                    <a href="mailto:jaen3dev@proton.me"><img src={protonmail} alt="Protonmail logo, it's an open card." /></a>
                                    <a href="https://www.linkedin.com/in/jean-carlos-ca/" target="_blank"><img src={linkedin} alt="Linkedin logo, it's the letters i and n in lowercase" /></a>
                                </div>
                            </div>
                            <div className="threeD">
                                3D
                            </div>
                        </div>
                        <motion.div className="red-skewed-bg" key={location.pathname}
                            initial={{
                                opacity: 0,
                                right: "-50rem"
                            }}
                            animate={{
                                opacity: 1,
                                right: "-8rem"
                            }}
                            exit={{
                                right: "-60rem"
                            }}
                            transition={{
                                duration: .75,
                                ease: 'backInOut'
                            }}
                        />
                    </>
                }
            </div>


        </section>
    )
}