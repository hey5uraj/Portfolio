import React from 'react'
import styles from './AboutMe.module.css'




const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.information}>
          <div className={styles.picture}>
            <img src="/Imagesssss/Coding.png" alt="" />
            <div className={styles.overlay}></div>

            <div className={styles.info}>
              <h1><span>01. </span> About Me </h1>
              <p>Hi, I am <span>Suraj Jadhav</span> , a passionate Frontend Developer with over a year of experience specializing in React.js. I hold a Bachelor's degree in Information Technology, which has provided me with a strong foundation in web development and design. My expertise lies in building dynamic and responsive websites, primarily using HTML, CSS, and JavaScript. I take pride in creating seamless user experiences and visually appealing interfaces. Dedicated and detail-oriented, I am always eager to learn new technologies and enhance my skills to stay at the forefront of web development trends.</p>
            </div>

          </div>
        </div>

        <div className={styles.scrollDiv}>
          <div className={styles.scroll}>

            <div className={styles.RightToLeft}>
              <p>Turning Designs into Interactive, Responsive, and User-Friendly Web Interfaces</p>
            </div>
            <div className={styles.LeftToRight}>
              <p>Crafting Dynamic and Responsive Websites for an Exceptional User Experience</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default AboutMe
