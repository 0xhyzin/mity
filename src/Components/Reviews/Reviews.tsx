import classes from "./Reviews.module.css"

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import profile from "../../assets/profile_image.png"
import './SliderReviews.css'

interface Review {
    title: string;
    subtitle: string;
    img: string;
    personName: string;
    personSpecific: string;
}

const reviews: Review[] = [
    {
        title: "Reliable & Scalable Solution",
        subtitle:
            "Mity delivered a backend system that easily handles thousands of users daily. Their clean architecture and API integrations made our platform future-proof.",
        img: profile,
        personName: "Omar Khaled",
        personSpecific: "CTO, FinTech Startup"
    },
    {
        title: "Smooth Collaboration",
        subtitle:
            "Working with Mity felt like having an in-house team. They understood our business goals and translated them into a seamless web application with a polished UI.",
        img: profile,
        personName: "Sara Ali",
        personSpecific: "Product Manager, E-Commerce"
    },
    {
        title: "Fast Delivery, Great Quality",
        subtitle:
            "From consultation to deployment, Mity kept everything on track. Their expertise in cloud deployment saved us a lot of time and infrastructure cost.",
        img: profile,
        personName: "Mohamed Hassan",
        personSpecific: "Founder, HealthTech App"
    },
    {
        title: "Excellent API Integrations",
        subtitle:
            "They helped us connect multiple third-party services with flawless API integrations. The documentation and support were top-notch.",
        img: profile,
        personName: "Lina Mansour",
        personSpecific: "Operations Lead, Logistics Company"
    },
    {
        title: "Long-term Tech Partner",
        subtitle:
            "We started with a small MVP, and Mity scaled it into a full product serving thousands. Their ongoing support makes them more than just a vendor.",
        img: profile,
        personName: "Ahmed Samir",
        personSpecific: "CEO, EdTech Startup"
    }
];

const Reviews = () => {
    return (
        <>
            <div id="reviews" className={classes.ReviewsSection}>
                <h2 className={classes.titleHeader}>What Our Clients Say</h2>
                <div className="reviews_slider">
                    <Splide
                        options={{
                            perPage: 3,
                            perMove: 1,
                            gap: "30px",
                            pagination: true,
                            arrows: true,
                            breakpoints: {
                                1350: { perPage: 2 },
                                900: { perPage: 1 },
                            },
                        }}
                    >
                        {reviews.map((review, index) => (
                            <SplideSlide key={index}>
                                <div className={classes.review}>
                                    <h2 className={classes.review_title}>{review.title}</h2>
                                    <p className={classes.review_subtitle}>{review.subtitle}</p>
                                    <div className={classes.personReview}>
                                        <div className={classes.personImage}>
                                            <img src={review.img} />
                                        </div>
                                        <div className={classes.personData}>
                                            <p>{review.personName}</p>
                                            <p>{review.personSpecific}</p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div >
        </>
    );
}

export default Reviews;