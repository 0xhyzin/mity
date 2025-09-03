import { motion, AnimatePresence } from "framer-motion";
import classes from "./ProcessItem.module.css"
import { useState } from "react";
import { IoIosRemove, IoMdAdd } from "react-icons/io";

const ProcessItem = ({ numper, title, subtitle }: { numper: string, title: string, subtitle: string }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={classes.processContainer}>
                <div className={classes.oneProcess}>
                    <div className={`${classes.processData} ${isOpen ? classes.open : ""}`}>
                        <div className={classes.DataContainer}>
                            <div className={classes.data}>
                                <p className={classes.numper}>{numper}</p>
                                <p className={classes.title}>{title}</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <IoIosRemove className={classes.iconBtn} /> : <IoMdAdd className={classes.iconBtn} />}
                            </button>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className={classes.processAnswer}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <p>
                                        {subtitle}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProcessItem;