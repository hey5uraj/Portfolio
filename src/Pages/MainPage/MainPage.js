import React from 'react'
import styles from './MainPage.module.css'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

const MainPage = () => {

    const handleDownload = () => {
        // const resumeUrl = "/PDF/Resume.pdf";
        const resumeUrl = "/PDF/Suraj_Resume.pdf";
        window.open(resumeUrl, '_blank')
    };
    return (
        <div className={styles.Container} id="/">
            <div className={styles.innerConainers}>
                <div className={styles.MainPageDiv} >
                    <div className={styles.Heading}>
                        <p>Hello I'M</p>
                        <h1>SURAJ JADHAV</h1>
                        <h3>A Passionate <span>Front-End Devloper</span></h3>
                        <button onClick={handleDownload}>Download Resume</button>
                    </div>

                    <div className={styles.Profile}>
                        <img src="/Imagesssss/me.png" alt="" className={styles.FirstImg} />
                        <img src="/Imagesssss/ME.jpg" alt="" className={styles.SecondImg} />
                    </div>
                </div>






                <div className={styles.contain1} id="about">
                    <AboutMe />
                </div>

                <div className={styles.contain2} id="projects">
                    <Projects />
                </div>

                <div className={styles.contain3} id="contact">
                    <ContactMe />
                </div>
            </div>
        </div>
    )
}

export default MainPage
