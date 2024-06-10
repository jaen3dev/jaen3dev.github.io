import React, { Suspense } from "react"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, CameraControls } from "@react-three/drei";
import Scene from "../../public/Scene.jsx";

export default function Home() {

    return (
        <section id="home">

            <div className="mobile">
                {location.pathname === '/' &&
                    <>
                        <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <AnimatePresence>
                                <motion.p
                                    key='apresentationP'
                                    initial={{ y: '-1rem', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -'1rem', opacity: 0 }}
                                    transition={{ ease: 'easeInOut' }}
                                >Jean Carlos,<br />desenvolvedor frontend <br />entusiasta 3D.</motion.p>
                                <div key='threeD' className="threeD-element">
                                    <Canvas>
                                        <ambientLight />
                                        <OrbitControls enableZoom={false}/>
                                        <CameraControls distance={1.2}/>
                                        <Suspense fallback={null}>
                                            <Scene />
                                        </Suspense>
                                        <Environment preset="sunset" />
                                    </Canvas>
                                </div>
                                <Link to="/contato">Vamos conversar?</Link>
                            </AnimatePresence>
                        </motion.div>
                    </>}


            </div>

            <div className="desktop">
                {location.pathname === '/' &&
                    <>
                        <div className="content">
                            <motion.div className="intro-and-socials"
                                initial={{ opacity: 0, x: '-200px' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '-10rem' }}
                                transition={{ duration: .75, ease: 'backInOut', delay: .2 }}
                            >
                                <p>Jean Carlos,<br />desenvolvedor frontend <br />entusiasta 3D.</p>

                                <Link to="/contato">Vamos conversar?</Link>

                            </motion.div>
                            <motion.div className="threeD"
                                initial={{ opacity: 0, x: '200px' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '10rem' }}
                                transition={{ duration: .75, ease: 'backInOut', delay: .2 }}>
                                <Canvas>
                                    <ambientLight />
                                    <CameraControls distance={1.5}/>
                                    <OrbitControls enableZoom={false}/>
                                    <Suspense fallback={null}>
                                        <Scene />
                                    </Suspense>
                                    <Environment preset="sunset" />
                                </Canvas>
                            </motion.div>
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