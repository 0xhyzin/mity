import { FaFacebookF, FaInstagram } from "react-icons/fa";
import classes from "./ContactUs.module.css"
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })



    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [loading])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_wjgtfsj",
                "template_4m1b9jo",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: "mityagency@gmail.com",
                },
                "z-TVaD2bUIYgWrJYp"
            )
            .then(
                (result) => {
                    alert("Your message was sent successfully.");

                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    alert("An error occurred while sending your message. Please try again.");

                    setLoading(false);
                }
            );
    };

    return (
        <>
            <div id="contact_us" className={classes.ContactUsSection}>
                <div className={classes.header}>
                    <h2>Contact Us</h2>
                    <p>Connect with Us: Let’s Build Scalable & Secure Web Applications.</p>
                </div>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <h2>We’re Here to Connect and Assist You</h2>
                        <p>Have questions about our web development services? Need help with API integration, database optimization, or cloud deployment? Our team is ready to assist you.</p>
                        <div className={classes.contactsInfo}>
                            <div className={classes.contactInfo}>
                                <h3>Email</h3>
                                <p>mityagency@gmail.com</p>
                            </div>
                            <div className={classes.contactInfo}>
                                <h3>Follow Us</h3>
                                <div className={classes.links}>
                                    <a href="https://www.facebook.com/profile.php?id=61579081367445" target="_blank" rel="noreferrer">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com/mity_agency/" target="_blank" rel="noreferrer">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.formContainer}>
                            <h3>GET IN TOUCH</h3>
                            <p>Reach out for custom projects, partnerships, or tailored solutions.</p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }}
                                className={classes.infoForm}
                            >
                                <div className={classes.group}>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        onChange={handelChange}
                                        value={formData.name}
                                        required
                                    />
                                    <label className={classes.label}>Name</label>
                                </div>

                                <div className={classes.group}>
                                    <input
                                        className={classes.input}
                                        type="email"
                                        name="email"
                                        placeholder=" "
                                        onChange={handelChange}
                                        value={formData.email}
                                        required
                                    />
                                    <label className={classes.label}>Email</label>
                                </div>

                                <div className={classes.group}>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        name="subject"
                                        placeholder=" "
                                        onChange={handelChange}
                                        value={formData.subject}
                                        required
                                    />
                                    <label className={classes.label}>Subject</label>
                                </div>

                                <div className={classes.group}>
                                    <input
                                        className={classes.input}
                                        type="text"
                                        name="message"
                                        placeholder=" "
                                        onChange={handelChange}
                                        value={formData.message}
                                        required
                                    />
                                    <label className={classes.label}>Message</label>
                                </div>

                                <button
                                    type="submit"
                                    className={classes.SendBtn}
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactUs;