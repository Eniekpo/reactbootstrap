import {Button, Alert} from 'react-bootstrap'
function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-bold mt-5">Buttons</h1>
        <button-group>
          <Button variant='primary' className="me-2">Primary</Button>
          <Button variant='secondary' className="me-2">Primary</Button>
          <Button variant='danger' className="me-2">Primary</Button>
          <Button variant='warning' className="me-2">Primary</Button>
          <Button variant='success' className="me-2">Primary</Button>
          <Button variant='info' className="me-2">Primary</Button>
          <Button variant='dark' className="me-2">Primary</Button>
          <Button variant='light' className="me-2">Primary</Button>
          <Button variant='link' className="me-2">Primary</Button>
        </button-group>
      </div>

      <div className="container mt-3">
        <h1>Alerts</h1>
        <Alert variant='success'>
          This is a
          <Alert.Link href="#"> An Example Link </Alert.Link>
           Give it a click if you want to see more.
       </Alert>
       
      </div>
    </>
  );
}

export default App;
