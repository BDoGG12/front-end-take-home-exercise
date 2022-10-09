import {Container, Nav, Navbar} from 'react-bootstrap';
import {Fragment} from 'react';
import classes from './MenuBar.module.css';

const MenuBar = () => {

  return (
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Fetch Rewards</Navbar.Brand>
          <Nav>
            <Nav.Link href='/sign-up'>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default MenuBar;