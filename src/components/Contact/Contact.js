import React, { Fragment} from 'react'
import classes from './Cont.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import axios from 'axios';
const Contact = () => {

    return (
        <Fragment>
            <Header />
            <div className={classes.header}> Contact me</div>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.details}>
                        <h1>Get in touch</h1>
                        <p>Kindly reach me out at following details.</p>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faUser} /></div>
                        <div className={classes.details}>
                            <h1>Name</h1>
                            <p>G.ALLA BAKASH</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className={classes.details}>
                            <h1>Address</h1>
                            <p>Bangalore, Karnataka</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faPhone} /></div>
                        <div className={classes.details}>
                            <h1>Mobile</h1>
                            <p>+91 - 6281029607</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className={classes.details}>
                            <h1>Email</h1>
                            <p>allabakashg75@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className={classes.form}>
                    <h1>Message me</h1>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" />
                    </div>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Email:</label>
                        <input type="email"/>
                    </div>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Mobile:</label>
                        <input type="text"  />
                    </div>
                    <div className={classes["input-controls"]}>
                        <label >Message:</label>
                        <textarea type="text"  />
                    </div>
                    <div className={classes["action-controls"]}>
                        <button type='submit' className={classes.button}>Send</button>
                    </div>
                </form>
            </div>
            <div className={classes.end}>----*----</div>
            <Footer />
        </Fragment>
    )
}

export default Contact;
