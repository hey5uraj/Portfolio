import React from 'react'
import styles from './MainPage.module.css'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects';

const MainPage = () => {

    const handleSayHello = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };
    return (
        <div className={styles.Container}>
            <div className={styles.innerConainers}>
                    <div className={styles.MainPageDiv}>
                        <div className={styles.Heading}>
                        <p>Hello I'M</p>
                        <h1>SURAJ JADHAV</h1>
                        <h3>A Passionate <span>Front-End Devloper</span></h3>
                        <button onClick={handleSayHello}>Say Hello</button>
                        </div>

                        <div className={styles.Profile}> 
                            <img src="/Imagesssss/me.png" alt="" className={styles.FirstImg}/>
                            <img src="/Imagesssss/ME.jpg" alt=""  className={styles.SecondImg}/>
                        </div>
                    </div>

                <AboutMe />

                <Projects/>

            </div>
        </div>
    )
}

export default MainPage
