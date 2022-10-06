import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const MenuBar = () => {

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Brand href='/sign-up'>Sign Up</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default MenuBar;