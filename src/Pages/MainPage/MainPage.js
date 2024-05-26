import React from 'react'
import styles from './MainPage.module.css'
import AboutMe from '../AboutMe/AboutMe'

const MainPage = () => {

    const handleSayHello = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };
    return (
        <div className={styles.Container}>
            <div className={styles.innerConainers}>
                    <div className={styles.MainPageDiv}>
                        <p>Hello I'M</p>
                        <h1>SURAJ JADHAV</h1>
                        <h3>A Passionate <span>Front-End Devloper</span></h3>
                        <button onClick={handleSayHello}>Say Hello</button>
                    </div>

                <AboutMe />

            </div>
        </div>
    )
}

export default MainPage
