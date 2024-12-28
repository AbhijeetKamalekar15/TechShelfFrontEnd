import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Navigate, Route, Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './components/About';

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App
