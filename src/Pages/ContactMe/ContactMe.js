import React from 'react'
import styles from './ContactMe.module.css'

const ContactMe = () => {

    const handleSayHello = () => {
        window.open('https://web.whatsapp.com/+919076164621?text="Hi Suraj!"', '_blank');
    };
    return (
        <div className={styles.footerContainer}>
            <div className={styles.getInTouch}>
                <div>
                    <h1><span>03. </span> Contact </h1>
                    <span>Get In Touch</span>
                    <p>My inbox is always open, whether you have a Conversation or just want to say Hi,I will try my best to get back to you</p>

                    <button onClick={handleSayHello}>Say Hello</button>

                </div>
            </div>
        </div>
    )
}

export default ContactMe
