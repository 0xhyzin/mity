import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Company_logo_1 from "../../../assets/Companys/Company_logo_1.png";
import Company_logo_2 from "../../../assets/Companys/Company_logo_2.png";
import Company_logo_3 from "../../../assets/Companys/Company_logo_3.png";
import Company_logo_4 from "../../../assets/Companys/Company_logo_4.png";
import Company_logo_5 from "../../../assets/Companys/Company_logo_5.png";
import Company_logo_6 from "../../../assets/Companys/Company_logo_6.png";

const logos = [
    Company_logo_1,
    Company_logo_2,
    Company_logo_3,
    Company_logo_4,
    Company_logo_5,
    Company_logo_6
];

import './SliderHero.css'
import classes from './Slider.module.css'

const Slider = () => {
    return (
        <div className="hero_slider">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 6,
                    perMove: 1,
                    autoplay: true,
                    interval: 1000,
                    pauseOnHover: false,
                    gap: '20px',
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        1800: { perPage: 6 },
                        1300: { perPage: 5 },
                        1024: { perPage: 4 },
                        850: { perPage: 3 },
                        650: { perPage: 2 },
                        500: { perPage: 1 },
                    },
                }}
            >
                {logos.map((logo, index) => (
                    <SplideSlide key={index}>
                        <img className={classes.logoImage} src={logo} alt={`logo-${index}`} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>

    );
};

export default Slider;