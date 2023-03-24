import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'

const Buttons = () => {
  return (
      <div className="container">
          <h1 className="text-bold mt-5">Buttons</h1>
          <ButtonGroup>
              <Button variant='primary' className="me-2">Primary</Button>
              <Button variant='secondary' className="me-2">Primary</Button>
              <Button variant='danger' className="me-2">Primary</Button>
              <Button variant='warning' className="me-2">Primary</Button>
              <Button variant='success' className="me-2">Primary</Button>
              <Button variant='info' className="me-2">Primary</Button>
              <Button variant='dark' className="me-2">Primary</Button>
              <Button variant='light' className="me-2">Primary</Button>
              <Button variant='link' className="me-2">Primary</Button>
          </ButtonGroup>
      </div>
  )
}

export default Buttons