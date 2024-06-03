import React from 'react'
import styles from './SideBar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const LeftSide = () => {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className={styles.MainDiv}>
            <div className={styles.Content}>
                <div className={styles.Links}>
                    <span onClick={() => openLink('https://github.com/hey5uraj')}>
                        <GitHubIcon />

                    </span>
                    <span>
                        <InstagramIcon />
                    </span>
                    <span onClick={() => openLink('https://www.linkedin.com/feed/')}>
                        <LinkedInIcon />
                    </span>
                    <span>
                        <FacebookOutlinedIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
