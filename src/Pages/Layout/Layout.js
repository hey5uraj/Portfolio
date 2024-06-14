import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './Layout.module.css'
import LeftSide from '../../components/SideBar/LeftSide'
import RightSide from '../../components/SideBar/RightSide'
import { Outlet } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'

const Layout = () => {



  return (
    <>
      <Navbar />

      <div className={styles.LayoutMain}>

        <div className={styles.layoutPage}>
          <div className={styles.LeftSide}>
            <LeftSide />
          </div>
          <div className={styles.PageContainer}>
            <MainPage />
          </div>
          <div className={styles.RightSide}>
            <RightSide />
          </div>
        </div>

        <>
          {/* <Footer /> */}
        </>
      </div>
    </>
  )
}

export default Layout
