import JpegViewer from './Jpegviewer'
import Cards from './Cards'
import Agroesp from './Agroesp'
const DataDashboard = ({ id }) => {
  return id ? (
    <div>
      <JpegViewer id={id} />
      <Cards id={id} />
    </div>
  ) : (
    <Agroesp />
  )
}
export default DataDashboard
