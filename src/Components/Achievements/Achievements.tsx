import classes from "./Achievements.module.css"

const Achievements = () => {
    return (
        <>
            <div className={classes.AchievementsSection}>
                <div className={classes.Achievement}>
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                </div>

                <div className={classes.Achievement}>
                    <h3>20+</h3>
                    <p>APIs & Integrations</p>
                </div>

                <div className={classes.Achievement}>
                    <h3>10+</h3>
                    <p>Cloud Deployments</p>
                </div>

                <div className={classes.Achievement}>
                    <h3>5+</h3>
                    <p>DB Optimizations</p>
                </div>
            </div>
        </>
    );
}

export default Achievements;