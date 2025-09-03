import classes from "../About/About.module.css"

import aboutImage from "../../assets/About_Section.png"
//-----------------------
import collaboration from "../../assets/collaboration.png"
import profit from "../../assets/profit.png"
import security from "../../assets/security.png"
//-----------------------



const About = () => {
    return (
        <>
            <section id="about" className={classes.AboutSection}>
                <div className={classes.infoIcons}>
                    <div className={classes.infoIcon}>
                        <div className={classes.Icon}>
                            <img src={profit} alt="profit" />
                        </div>
                        <div className={classes.info}>
                            <h3>Scalable</h3>
                            <p>We develop modern web applications that adapt to your business growth, ensuring speed and reliability.</p>
                        </div>
                    </div>
                    <div className={classes.infoIcon}>
                        <div className={classes.Icon}>
                            <img src={collaboration} alt="collaboration" />
                        </div>
                        <div className={classes.info}>
                            <h3>Integrations</h3>
                            <p>Our expertise in APIs and systems makes your platforms work together smoothly and efficiently.</p>
                        </div>
                    </div>
                    <div className={classes.infoIcon}>
                        <div className={classes.Icon}>
                            <img src={security} alt="security" />
                        </div>
                        <div className={classes.info}>
                            <h3>Security</h3>
                            <p>We deliver cloud-ready, optimized, and secure environments to keep your business always online.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.aboutImageData}>
                    <div className={classes.Image}>
                        <img src={aboutImage} alt="aboutImage" />
                    </div>
                    <div className={classes.data}>
                        <p className={classes.p1}>ABOUT OUR COMPANY</p>
                        <h2>We Are Providing <span>Best Custom Web Solutions</span></h2>
                        <p className={classes.p2}>We specialize in developing modern, scalable web applications, delivering custom solutions that help businesses grow online. With strong expertise in backend systems, frontend design, and database architecture, we ensure clean, secure, and reliable products.</p>
                        {/* <ul className={classes.listServices}>
                            <li>
                                <img src={right} alt="right" />
                                <p>Website Development</p>
                            </li>
                            <li>
                                <img src={right} alt="right" />
                                <p>API & System Integration</p>
                            </li>
                            <li>
                                <img src={right} alt="right" />
                                <p>DB Optimization</p>
                            </li>
                            <li>
                                <img src={right} alt="right" />
                                <p>Cloud & Server Deployment</p>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;