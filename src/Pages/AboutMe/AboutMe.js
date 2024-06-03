import React from 'react'
import styles from '../MainPage/MainPage.module.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const cards = [
  {
    id: 1,
    icon: '',
    label: '',
    para: '',
  },
  {
    id: 2,
    icon: '',
    label: '',
    para: '',
  },
  {
    id: 3,
    icon: '',
    label: '',
    para: '',
  },
  {
    id: 4,
    icon: '',
    label: '',
    para: '',
  }

]


const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.information}>
          <div className={styles.picture}>
            <img src="Imagesssss/background.png" alt="" />
          </div>
          <div className={styles.info}>
            <h4>About  <span> Me </span></h4>
            <h2>I Develop System that Works</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
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

        <div className={styles.aboutDiv}>
          {
            cards.map((item, id) => {
              return (

                <div className={styles.boxes} key={id}>
                  <div>
                    <AcUnitIcon />
                  </div>
                  <h6>This iS Titlle</h6>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorum dolorem laboriosam aspernatur autem ipsam dolor, labore vero suscipit architecto distinctio sit eos, mollitia officiis dicta obcaecati, ducimus voluptatibus molestias.</p>

                </div>
              )

            })
          }

        </div>
      </div>
    </>
  )
}

export default AboutMe
