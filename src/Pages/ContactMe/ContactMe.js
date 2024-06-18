import React from 'react'
import styles from './ContactMe.module.css'

const ContactMe = () => {

  
    return (
        <div className={styles.footerContainer}>
            <div className={styles.getInTouch}>
                <div>
                    <h1><span>03. </span> Contact </h1>
                    <span>Get In Touch</span>
                    <p>My inbox is always open, whether you have a Conversation or just want to say Hi,I will try my best to get back to you</p>

                    <a href='https://wa.me/+919076164621?text=Hi Suraj!' >Say Hello</a>

                </div>
            </div>
        </div>
    )
}

export default ContactMe
