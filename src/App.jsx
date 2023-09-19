import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BookDashboard from './components/BookDashboard'

const App = () => {
  return (
    <>
      <Navbar title="Library App"/>
      <BookDashboard/>
    </>
  )
}
