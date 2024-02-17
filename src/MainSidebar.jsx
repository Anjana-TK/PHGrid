import React from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import { SidebarData } from './SidebarData'

function Sidebar() {
  const location = useLocation()
  return (
    <div className="Sidebar h-[calc(100vh-2rem)] w-full">
      <div className="heading">UPAHAR FOODS</div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          const isActive = location.pathname === val.link
          return (
            <li
              key={key}
              className={isActive ? 'row active' : 'row'}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
