import React, { Fragment } from 'react'
import Header from '../Header/Header';
import classes from './About.module.css'
import profile from '../assets/ab.png'
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <Fragment>
            <Header />
            <h1 className={classes.heading}>About me</h1>
            <div className={classes.container}>
                <div className={classes["left-content"]}>
                    <img src={profile} alt="" />
                </div> 
                <div className={classes["right-content"]}>
                    <h1 className={classes.tilte}>
                        I'm G.ALLA-BAKASH and I am a  
                        <span> mern stack developer</span>
                    </h1>
                    <p className={classes.about}>
                        As I mentioned above that I am a backend-web-developer. 
                        I have learnt web Technologies like Backend,frontend and Database.
                         Apart from these technologies I have good knowledge of Data Structures a
                         nd Algorithms. I have completed my B.com(Computer Applications)  in 
                          Loyola Degree College in the year of 2023 in Pulivendula ,
                         YVU University Kadapa, Andhra Pradesh. Also I
                          have completed  mpc in 2020 from Government Junior 
                          College Pulivendula, Andhra Pradesh.
                    </p>
                    <a className={classes.button} href="/" target='blank'>Download CV</a>
                </div>
            </div>
            <div className={classes.end}>----*----</div>
            <Footer />
        </Fragment>
    )
}

export default About;
