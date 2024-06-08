import React from 'react'
import styles from './SideBar.module.css'

// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GithubIcon from '../../icons/GithubIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import TwitterIcon from '../../icons/TwitterIcon';

const LeftSide = () => {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className={styles.MainDiv}>
            <div className={styles.Content}>
                <div className={styles.Links}>
                    <a href="https://github.com/hey5uraj" target='_blank' className={styles.icons}>
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/feed/" target='_blank' className={styles.icons}>
                        <LinkedInIcon />
                    </a>
                    <a href="axwd" target='_blank' className={styles.icons}>
                        <InstagramIcon />
                    </a>

                    <a href="wdw" target='_blank' className={styles.icons}>
                        <TwitterIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
