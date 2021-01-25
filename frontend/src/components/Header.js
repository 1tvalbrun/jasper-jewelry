import * as React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const { Brand, Collapse, Toggle } = Navbar;
  const { Link } = Nav;
  return (
    <Navbar bg='light' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Brand>Jasper Jewelry</Brand>
        </LinkContainer>
        <Toggle aria-controls='basic-navbar-nav' />
        <Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Link>
                <i className='fas fa-shopping-cart' /> Cart
              </Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Link>
                <i className='fas fa-user' /> Sign In
              </Link>
            </LinkContainer>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
