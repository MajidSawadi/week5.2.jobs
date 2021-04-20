import React from 'react'
import { Link} from 'react-router-dom';
import {Navbar , Button , Nav , Form, FormControl} from 'react-bootstrap'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} exact to="/login">Login</Nav.Link>
      <Nav.Link as={Link} exact to ="/jobs">Test</Nav.Link>
      <Nav.Link as={Link} to  ="/">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
