import React, { useState } from 'react'
import styles from '../Footer/Footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

    const [subscribed, setSubscribed] = useState(false);

    const handleClick = () => {
        if (subscribed) {
            alert('You have unsubscribed Successful ')
        } else {
            alert('Your Subscribe Was Successful ')
        }
        setSubscribed(!subscribed);
    };


    return (
        <div className={styles.Container}>
            <div className={styles.MainDiv}>
                <div className={styles.boxes}>
                    <img src="/Imagesssss/Suraj bl.png" alt="" />
                </div>
                <div className={styles.boxes}>
                    <ul>
                        <p>Download</p>
                        <li>Window App</li>
                        <li>Mac App</li>
                        <li>Linux App</li>
                        <li>Desktop App</li>
                    </ul>


                </div>
                <div className={styles.boxes}>
                    <ul>
                        <p>Products</p>
                        <li>Web</li>
                        <li>App</li>
                        <li>Software</li>
                        <li>Ecommerce</li>
                    </ul>


                </div>
                <div className={`${styles.boxes} ${styles.additionalClass}`}>
                    <p>Get in touch</p>
                    <div className={styles.subscribe}>
                        <input type="text" placeholder='Enter your email' />
                        <button onClick={handleClick} className={subscribed ? styles.RedSub : styles.BlueSub}>{subscribed ? 'Subscribed' : 'Subscribe'}</button>
                    </div>
                </div>
            </div>

            <footer><p>@2024 Glossy. All right reserved.</p></footer>
        </div>
    )
}

export default Footer
