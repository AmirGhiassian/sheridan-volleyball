import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import ballImage from "/volleyball.jpg";
import instaImage from "/insta.png";
import TimesTable from "./TimesTable";
import clockImage from "/clock.png";



function App() {
    const [showTimes, setShowTimes] = useState(false);

    const animationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <div className="app">
            {showTimes ? (
                <TimesTable setShowTimes={setShowTimes} />
            ) : (
                <motion.div
                    className="app-col"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        whileHover={{ scale: 1.2 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2 } }}
                        className="title"
                    >
                        Sheridan College Volleyball Club
                    </motion.h1>
                    <div className="app-row">
                        <motion.div
                            className="motion-container"
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            onClick={() => {
                                window.location.href = "https://sheridancollege.campuslabs.ca/engage/organization/vbsheridan";
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 2 } }}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            drag
                        >
                            <img
                                draggable={false}
                                src={ballImage}
                                className="ball-img round-me"
                                alt="volleyball"
                            />
                            <p>Club Corner Website</p>
                        </motion.div>

                        <motion.div
                            className="motion-container"
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            onClick={() => {
                                window.location.href = "https://www.instagram.com/vbsheridan/?igshid=YmMyMTA2M2Y%3D";
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 2 } }}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            drag
                        >
                            <img
                                draggable={false}
                                src={instaImage}
                                className="insta-img"
                                alt="instagram"
                                style={{ height: 150, width: 150 }}
                            />
                            <p>Club Instagram</p>
                        </motion.div>

                        <motion.div
                            className="motion-container"
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            onClick={() => setShowTimes(true)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 2 } }}
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            drag
                        >
                            <img
                                draggable={false}
                                src={clockImage}
                                className="clock-img"
                                alt="clock"
                                style={{ height: 150, width: 150 }}
                            />
                            <p>Show Times</p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default App;