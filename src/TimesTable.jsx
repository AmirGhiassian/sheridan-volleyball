import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./TimesTable.css";

function TimesTable({ setShowTimes }) {
    return (
        <motion.div
            className="times-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            transition={{ duration: 0.5 }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            drag
        >
            <h2 className="times-title">Drop-in Volleyball Times</h2>
            <div className="times-grid">
                <div className="time-item">
                    <span className="day">Monday</span>
                    <span className="time">3:00 PM - 5:00 PM</span>
                </div>
                <div className="time-item">
                    <span className="day">Friday</span>
                    <span className="time">5:00 PM - 7:00 PM</span>
                </div>
            </div>
            <p className="additional-info">
                These are not official bookings and are open to change due to rentals or school events. The athletic center is aware of the traffic that volleyball brings during those times. Therefore, those are the days that everyone comes to play. Anyone is welcome; we are just a group of people that like to play!
            </p>
            <button className="back-button" onClick={() => setShowTimes(false)}>
                Back
            </button>
        </motion.div>
    );
}

TimesTable.propTypes = {
    setShowTimes: PropTypes.func.isRequired,
};

export default TimesTable;