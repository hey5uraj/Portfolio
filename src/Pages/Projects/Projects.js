import React from 'react'
import styles from './Projects.module.css'
// import ArrowIcon from '../../icons/ArrowIcon'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const cards = [
  {
    id: 1,
    link: 'https://kjssteel.com/',
    label: 'Website',
    name: 'KJS Steel',
    para: "Assisted in developing the KJS Steel website, enhancing the company's online profile. This dynamic site effectively showcases KJS Steel's products, services, and industry expertise, with a custom CMS backend for easy content management by the client.",
    lang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    link: 'https://www.gece.net.in/',
    label: 'Website',
    name: 'GECE',
    para: 'Dummy data',
    lang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    link: '',
    label: 'Website',
    name: 'Portfolio Website',
    para: 'It serves as a digital resume that provides a comprehensive overview of the my career and accomplishments.',
    lang: ['HTML', 'CSS', 'JavaScript'],
  },


]


const Projects = () => {
  return (
    <>
      <div className={styles.ProjectsDiv}>
        {
          cards.map((item, id) => {
            return (
              <div className={styles.projectBox} key={id}>
                <div className={styles.proImg}>
                  <img src="/Imagesssss/Coding.png" alt="" />
                </div>

                <div className={styles.proContent}>
                  <div>
                    <p>{item.label}</p>
                    <a href={item.link} target='_blank'>{item.name} <ArrowOutwardIcon/></a>
                    <span>{item.para}</span>
                    {/* <ArrowIcon/> */}
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
    </>
  )
}

export default Projects
