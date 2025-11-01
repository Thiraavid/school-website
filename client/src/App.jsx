import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Academics from './pages/Academics'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

export default function App(){
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/academics" element={<Academics/>} />
            <Route path="/faculty" element={<Faculty/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}
