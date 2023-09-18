import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BookDashboard from './components/BookDashboard'

function App() {
  return (
    <>
      <Navbar title="Library App"/>
      <BookDashboard/>
    </>
  )
}

export default App
