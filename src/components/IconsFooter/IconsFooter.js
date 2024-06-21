import React from 'react'
import GithubIcon from '../../icons/GithubIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import styles from './IconsFooter.module.css'


const IconsFooter = () => {
    return (
        <>
            <div className={styles.iconsfot}>

                <div className={styles.Links}>
                    <a href="https://github.com/hey5uraj" target='_blank' className={styles.icons}>
                        <GithubIcon />
                    </a>
                    <a href="https://x.com/hey5uraj" target='_blank' className={styles.icons}>
                        <TwitterIcon />
                    </a>
                    <a href="https://www.instagram.com/hey5uraj/" target='_blank' className={styles.icons}>
                        <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/suraj-jadhav-75a313205/" target='_blank' className={styles.icons}>
                        <LinkedInIcon />
                    </a>

                </div>
            </div>
        </>
    )
}

export default IconsFooter
