import {Container, Nav, Navbar} from 'react-bootstrap';
import {Fragment} from 'react';
import classes from './MenuBar.module.css';

const MenuBar = () => {

  return (
    <Fragment>
      <Navbar bg='light' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>Fetch Rewards</Navbar.Brand>
          <Nav className={classes['menu']}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/sign-up'>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default MenuBar;