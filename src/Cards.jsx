import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

import { WiHumidity, WiThermometer, WiTime4 } from 'weather-icons-react'
import { FiActivity } from 'react-icons/fi'

const Cards = () => {
  return (
    <div className="flex space-x-4">
      <Card className="mt-6 w-40 bg-cyan-100">
        <CardBody>
          <div className="flex">
            <Typography variant="h3" color="black" className="down">
              53
            </Typography>
            <WiHumidity size={40} color="#000" />
          </div>

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Humidity
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-40 bg-amber-100">
        <CardBody>
          <div className="flex">
            <Typography variant="h3" color="black" className="down">
              32
            </Typography>
            <WiThermometer size={40} color="#000" />
          </div>

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Temperature
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-40 bg-lime-100">
        <CardBody>
          <div className="flex">
            <Typography variant="h3" color="black" className="down">
              42
            </Typography>
            <WiTime4 size={40} color="#000" />
          </div>

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Time Remaining
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-40 bg-red-100">
        <CardBody>
          <div className="flex">
            <Typography variant="h3" color="black" className="down">
              Fresh
            </Typography>
            <FiActivity size={40} color="#000" />
          </div>

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Status
          </Typography>
        </CardBody>
      </Card>
    </div>
  )
}
export default Cards
