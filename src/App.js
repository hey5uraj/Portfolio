import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
// import MainPage from './Pages/MainPage/MainPage';
// import Test from './components/Test/Test'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          {/* <Route path='/' element={<Test/>} /> */}
          {/* <Route  index element={<Outlet />}>
            <Route path='/MainPage'  element={<MainPage />} />
          </Route> */}
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;


