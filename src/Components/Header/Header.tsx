import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import classes from "../Header/Header.module.css";
import logo from "../../assets/Logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />

            <AnimatePresence>
                <motion.ul
                    className={`${classes.list} ${menuOpen ? classes.open : ""}`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.2 }}
                >
                    <li>
                        <a
                            href="#about"
                            onClick={(e) => {
                                setMenuOpen(false)
                                e.preventDefault();
                                const section = document.getElementById("about");
                                if (section) {
                                    const offset = 0;
                                    const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top, behavior: "smooth" });
                                }
                            }}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => {
                            setMenuOpen(false)
                            e.preventDefault();
                            const section = document.getElementById("services");
                            if (section) {
                                const offset = 0;
                                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top, behavior: "smooth" });
                            }
                        }}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#Process" onClick={(e) => {
                            setMenuOpen(false)
                            e.preventDefault();
                            const section = document.getElementById("Process");
                            if (section) {
                                const offset = 0;
                                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top, behavior: "smooth" });
                            }
                        }}
                        >
                            Process
                        </a>
                    </li>
                    <li>
                        <a href="#reviews" onClick={(e) => {
                            setMenuOpen(false)
                            e.preventDefault();
                            const section = document.getElementById("reviews");
                            if (section) {
                                const offset = 0;
                                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top, behavior: "smooth" });
                            }
                        }}
                        >
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a href="#contact_us" onClick={(e) => {
                            setMenuOpen(false)
                            e.preventDefault();
                            const section = document.getElementById("contact_us");
                            if (section) {
                                const offset = 0;
                                const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top, behavior: "smooth" });
                            }
                        }}
                        >
                            Contact Us
                        </a>
                    </li>
                </motion.ul>
            </AnimatePresence>

            <button
                className={classes.burger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX className={classes.IconX} /> : <FiMenu className={classes.Icon} />}
            </button>
        </header>
    );
};

export default Header;
