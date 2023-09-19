import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookDashboard from './components/BookDashboard/BookDashboard'

const App = () => {
  return (
    <>
      <Navbar title="Library App"/>
      <BookDashboard/>
    </>
  )
}
