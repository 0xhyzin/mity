import classes from "./Process.module.css"
import ProcessItem from "./ProcessItem";



const Process = () => {

    return (
        <>
            <div id="Process" className={classes.ProcessSection}>
                <div className={classes.header}>
                    <h2>Our Working Process</h2>
                    <p>Step-by-Step Guide to Achieving Your Business Goals</p>
                </div>

                <ProcessItem
                    numper="01"
                    title="Consultation"
                    subtitle="We begin with an in-depth consultation to fully understand your business goals, technical requirements, and expectations. This stage helps us define the project scope and align priorities with your vision."
                />

                <ProcessItem
                    numper="02"
                    title="Planning & Strategy"
                    subtitle="Based on our discussions, we craft a clear strategy that covers the right technologies, system architecture, and timelines. Our goal is to create a solid foundation that ensures scalability and long-term success."
                />

                <ProcessItem
                    numper="03"
                    title="Design & Prototyping"
                    subtitle="We transform ideas into interactive prototypes with clean UI/UX design. This allows you to preview the user journey, refine the look and feel, and make informed decisions before development begins."
                />

                <ProcessItem
                    numper="04"
                    title="Development & Integration"
                    subtitle="Our developers bring the solution to life by building secure, high-performance applications. We ensure seamless API integrations and optimized backend systems tailored to your business needs."
                />

                <ProcessItem
                    numper="05"
                    title="Testing & Deployment"
                    subtitle="We carry out thorough testing to eliminate bugs, ensure security, and guarantee smooth performance. Once validated, we deploy the solution in cloud-ready environments optimized for speed and reliability."
                />

                <ProcessItem
                    numper="06"
                    title="Support & Optimization"
                    subtitle="After launch, we provide continuous support, monitoring, and regular enhancements. This ensures your solution stays fast, secure, and ready to adapt to new technologies and business challenges."
                />
            </div>
        </>
    );
}

export default Process;