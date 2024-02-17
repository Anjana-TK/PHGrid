import Sidebar from './Sidebar1'

import './App.css'
import Sidebar2 from './Sidebar2'
import PPMViewer from './PPMViewer'
import Cards from './Cards'
import JpegViewer from './Jpegviewer'
import Navbar from './Navbar'
import MainSidebar from './MainSidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import DataDashboard from './DataDashboard'
import { useState } from 'react'
import Homepage from './Homepage'
// import LoginForm from './LoginForm'

function App() {
  return (
    <Router>
      <div className="size-auto bg-red-100">
        <Navbar />
        <div className="grid grid-flow-col auto-cols-max gap-28 ">
          <MainSidebar />

          <Homepage />
        </div>
      </div>
    </Router>
  )
}

export default App
