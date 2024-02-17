import DataDashboard from './DataDashboard'
import Sidebar2 from './Sidebar2'
import { useState } from 'react'
const Homepage = () => {
  const [selectedId, setSelectedId] = useState(null)

  const handleLiveImageClick = (id) => {
    setSelectedId(id)
  }
  return (
    <div className="grid grid-cols-subgrid justify-between col-span-2 ">
      <DataDashboard id={selectedId} />
      <Sidebar2 onLiveImageClick={handleLiveImageClick} />
    </div>
  )
}

export default Homepage
