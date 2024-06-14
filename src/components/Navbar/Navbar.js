import React, { useEffect, useState } from 'react'
import styles from '../Navbar/Navbar.module.css'

const Navbar = () => {

    const handleDownload = () => {
        const resumeUrl = "/PDF/Suraj Resume.pdf";
            window.open(resumeUrl,'_blank')
    };


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/Imagesssss/Suraj bl.png" alt="" />
                </div>
                <ul className={styles.links}>
                    <li><span>01. </span> About us </li>
                    <li><span>02. </span> Projects</li>
                    <li><span>03. </span> Contact</li>
                    <button onClick={handleDownload}>Resume</button>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar
