import classes from "./Services.module.css"

import Website_Development from "../../assets/Services/undraw_programming_65t2.svg"
import Ui_Ux from "../../assets/Services/undraw_design-data_ybvy.svg"
import API_integration from "../../assets/Services/undraw_online-connection_c56e.svg"
import DB_Optimization from "../../assets/Services/undraw_spreadsheet_uj8z.svg"
import Security_Maintenance from "../../assets/Services/undraw_two-factor-authentication_8tds.svg"
import Cloud_Deployment from "../../assets/Services/undraw_upload_cucu.svg"

const Services = () => {
    return (
        <>
            <div id="services" className={classes.ServicesSection}>
                <div className={classes.header}>
                    <h2>Services</h2>
                    <p>At our web development company, we provide modern digital solutions designed to help businesses scale, optimize performance, and succeed online.</p>
                </div>
                <div className={classes.servicesContainer}>
                    <div className={classes.service}>
                        <h2>Website <br /> Development</h2>
                        <img src={Website_Development} alt="Website_Development" />
                    </div>
                    <div className={classes.service}>
                        <h2>API & System  <br /> Integration</h2>
                        <img src={API_integration} alt="API_integration" />
                    </div>
                    <div className={classes.service}>
                        <h2>Database <br /> Optimization</h2>
                        <img src={DB_Optimization} alt="DB_Optimization" />
                    </div>
                    <div className={classes.service}>
                        <h2>Cloud &  Server<br /> Deployment</h2>
                        <img src={Cloud_Deployment} alt="Cloud_Deployment" />
                    </div>
                    <div className={classes.service}>
                        <h2>Security & <br /> Maintenance</h2>
                        <img src={Security_Maintenance} alt="Security_Maintenance" />
                    </div>
                    <div className={classes.service}>
                        <h2>UI/UX Design</h2>
                        <img className={classes.smallImg} src={Ui_Ux} alt="Ui_Ux" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;