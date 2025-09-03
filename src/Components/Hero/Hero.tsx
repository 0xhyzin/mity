import classes from "../Hero/Hero.module.css"
// import heroImage from "../../assets/Hero_Illustration_1.png"
import heroImage from "../../assets/hero_7.svg"
//---------------------------------------

import { FaWhatsapp } from "react-icons/fa"
import Slider from "./Slider/Slider";
//---------------------------------------



const Hero = () => {


    return (
        <>
            <section  className={classes.HeroSection}>
                <div className={classes.heroContent}>
                    <div className={classes.DataSection}>
                        <h1>Building Modern Web Solutions for Growth</h1>
                        <p>Mity helps businesses build reliable and scalable online platforms through services including website development, API integration, UI/UX design, database optimization, and cloud deployment.</p>
                        <button
                            onClick={() => {
                                window.open("https://wa.me/+201034240473", "_blank");
                            }}
                        >
                            <FaWhatsapp className={classes.WhatsappIcon} fontSize={30} />
                            Start Your Project
                        </button>
                    </div>
                    <div className={classes.heroImage}>
                        <img src={heroImage} alt="heroImage" />
                    </div>
                </div>
                <div className={classes.sliderSection}>
                    <Slider />
                </div>
            </section>
        </>
    );
}

export default Hero;
