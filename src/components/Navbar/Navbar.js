import React, { useEffect, useState } from 'react'
import styles from '../Navbar/Navbar.module.css'

const Navbar = () => {

    const handleDownload = () => {
        const resumeUrl = "/PDF/Resume.pdf";
            window.location.href = resumeUrl;
    };
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/Imagesssss/Suraj bl.png" alt="" />
                </div>
                <ul className={styles.links}>
                    <li><span>01. </span> About us </li>
                    <li><span>02. </span> Projects</li>
                    <li><span>03. </span> Contact</li>
                    <button onClick={handleDownload}>Download CV</button>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
