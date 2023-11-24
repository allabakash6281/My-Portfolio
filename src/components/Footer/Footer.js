import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
const Footer = () => {
    return (
        <Fragment>
            <div className={classes.footer}>
                <li>
                    <Link className={classes.link} to='https://www.linkedin.com/in/alla-bakash-379102288/' target='blank'><FontAwesomeIcon icon={faLinkedin} /> </Link>
                </li>
                <li >
                    <Link className={classes.link} to='https://github.com/allabakash6281' target='blank'><FontAwesomeIcon icon={faGithub} /></Link>
                </li>
                <li >
                    <Link className={classes.link} to="/" target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                </li>
                <li >
                    <Link className={classes.link} to='/' target='blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                </li>
                <p>@ 2023, AB Alla Bakash -G</p>
            </div>
        </Fragment>
    )
}

export default Footer;
