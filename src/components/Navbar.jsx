import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg='dark' expand='sm' variant='dark'>
            <Container>
                <Navbar.Brand href='#'>REACT bOOTSTRAP</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text><a href="#login" className='btn btn-dark'>Login</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation