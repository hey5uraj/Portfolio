import React, { useEffect, useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

    const handleDownload = () => {
        // const resumeUrl = "/PDF/Suraj Resume.pdf";
        const resumeUrl = "/PDF/Resume.pdf";
        window.open(resumeUrl, '_blank')
    };


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
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
                    <ScrollLink to="/" smooth={true} duration={500}>
                        <img src="/Imagesssss/Suraj bl.png" alt="" />
                    </ScrollLink>
                </div>
                <ul className={styles.links}>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500}>
                            <span>01. </span> About us
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            <span>02. </span> Projects
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <span>03. </span> Contact
                        </ScrollLink>
                    </li>

                    <button onClick={handleDownload}>Resume</button>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar
