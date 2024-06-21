import React from 'react'
import styles from './Projects.module.css'
// import ArrowIcon from '../../icons/ArrowIcon'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const cards = [
  {
    id: 1,
    link: 'https://kjssteel.com/',
    img: '/Imagesssss/Steel.png',
    label: 'Website',
    name: 'KJS Steel',
    para: "Assisted in developing the KJS Steel website, enhancing the company's online profile. This dynamic site effectively showcases KJS Steel's products, services, and industry expertise, with a custom CMS backend for easy content management by the client.",
    lang: ['React Js', 'SQL', 'SPRING Boot', 'HTML', 'CSS', 'JAVA'],
  },
  {
    id: 2,
    link: 'https://www.gece.net.in/',
    img: '/Imagesssss/Gece.png',
    label: 'Website',
    name: 'GECE',
    para: "Assisted in developing the GECE website, enhancing the company's online profile. This dynamic site effectively showcases GECE's products, services, and industry expertise, with a custom CMS backend for easy content management by the client.",
    lang: ['HTML', 'CSS', 'JavaScript', 'SQL', 'SPRING Boot', 'JAVA'],
  },
  {
    id: 3,
    link: '',
    img: '/Imagesssss/Portfolio.png',
    label: 'Website',
    name: 'Portfolio Website',
    para: 'It serves as a digital resume that provides a comprehensive overview of the my career and accomplishments.',
    lang: ['React Js', 'HTML', 'CSS', 'JavaScript'],
  },


]



const Projects = ({ showInfo }) => {
  return (
    <>
      <div className={styles.ProjectsDiv}>
        
        <div className={styles.info}>
          <h1><span>02.</span> Projects</h1>
        </div>


        <div className={styles.projectDivs}>
          {
            cards.map((item, id) => {
              return (
                <div className={styles.projectBox} key={id}>
                  <div className={styles.proImg}>
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                      <img src={item.img} alt="" />
                      <div className={styles.overlay}></div>
                    </a>
                  </div>

                  <div className={styles.proContent}>
                    <div>
                      <p>{item.label}</p>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>
                        {item.name} <ArrowOutwardIcon /></a>
                      <span>{item.para}</span>
                      <ul>
                        {item.lang.map((lang, index) => (
                          <li key={index}>{lang}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              )

            })
          }

        </div>

      </div>
    </>
  )
}

export default Projects
