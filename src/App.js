import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Courses from './components/Header/Courses';
import MainCourse from './components/Header/MainCourse';
import Home from './components/Header/Home';
import About from './components/Header/About';
import Notify from './components/Header/Notify';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home/Notify' element={<Notify/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/course/:id' element={<MainCourse />} />
      </Routes>
    </>
  )
}
