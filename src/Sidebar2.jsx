import React, { useState } from 'react'
import {
  Card,
  Typography,
  Select,
  Option,
  Card as MuiCard,
} from '@material-tailwind/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Paper,
  CardContent,
  Typography as MuiTypography,
  CardActions,
  Button,
} from '@mui/material'

import itemsData from './items.js'
import Agroesp from './Agroesp.jsx'

function Sidebar2({ onLiveImageClick }) {
  const [selectedPolyhouse, setselectedPolyhouse] = useState(null)
  const [showData, setShowData] = useState(false)

  const handleSelect = (value) => {
    setselectedPolyhouse(value)
  }

  const handleLiveImageClick = (id) => {
    onLiveImageClick(id)
  }

  const selectedItems = itemsData.filter(
    (item) => item.polyhouse === selectedPolyhouse
  )

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          PolyHouses
        </Typography>
      </div>
      <div className="w-72">
        <Select label="Polyhouse" onChange={handleSelect}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
        </Select>
      </div>

      <hr className="my-2 border-blue-gray-50" />
      {selectedItems.map((selectedItem) => (
        <Paper sx={{ m: 1 }} elevation={4} key={selectedItem.id}>
          <MuiCard>
            <CardContent>
              <MuiTypography
                sx={{ fontSize: 14 }}
                color="blue-gray"
                gutterBottom
              >
                {selectedItem.id}
              </MuiTypography>
              <div className="float-right">
                <img
                  className="h-24 w-24 rounded-full object-cover object-center  shadow-xl shadow-blue-gray-900/50"
                  src={selectedItem.imageUrl}
                  alt={selectedItem.imageName}
                />
              </div>
              <MuiTypography variant="h5" component="div">
                {selectedItem.name}
              </MuiTypography>

              <MuiTypography sx={{ mb: 1.5 }} color="gray">
                {selectedItem.variety}{' '}
                <span style={{ fontWeight: 'bold' }}>
                  ({selectedItem.type})
                </span>
              </MuiTypography>
              <MuiTypography>
                Grid Location: {selectedItem.location}
              </MuiTypography>
              <MuiTypography variant="paragraph">
                Staff: {selectedItem.staffId} <br />
                Vendor: {selectedItem.vendorName}
                <br />
              </MuiTypography>
            </CardContent>
            <CardActions>
              <Button
                size="sm"
                onClick={() => handleLiveImageClick(selectedItem.id)}
              >
                Live Image
              </Button>
            </CardActions>
          </MuiCard>
        </Paper>
      ))}
    </Card>
  )
}

export default Sidebar2
