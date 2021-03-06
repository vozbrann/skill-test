import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import {Link, NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import UserAvatar from './UserAvatar';

import ImagePlaceholder from '../img/img-placeholder.jpg'
const AppBar = () => {

  const [navExpanded, setNavExpanded] = useState(false);

  const user = useSelector(state => state.user.user);
  const userInfoLoading = useSelector(state => state.user.userInfoLoading);


  return (
    <Navbar onToggle={() => setNavExpanded(!navExpanded)} expanded={navExpanded} bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="font-weight-bold" data-testid="logo-home-link" as={Link} to="/">SkillTest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" onClick={() => setNavExpanded(false)}>
          <Nav>
            <Nav.Link exact as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link exact as={NavLink} to="/catalog">Catalog</Nav.Link>
            {user && <>
              <Nav.Link exact as={NavLink} to="/myResults">My results</Nav.Link>
              <Nav.Link exact as={NavLink} to="/allResults">All results</Nav.Link>
              <Nav.Link exact as={NavLink} to="/users">All Users</Nav.Link>
            </>}
          </Nav>
          <Nav className="ml-auto">
            {userInfoLoading ?
              <Spinner data-testid="loading-spinner" animation="border" />
              :
              <>
                {user ?
                  <Nav.Link as={NavLink} to="/profile" data-testid="profile-link" className="d-flex align-items-center m-0 p-0">
                    <p className="h5 mb-0 mr-3">{user.username}</p>
                    <UserAvatar src={user.image || ImagePlaceholder}/>
                  </Nav.Link>
                  :
                  <>
                    <Button as={Link} to="/signUp" variant="outline-light" className="mr-lg-3 mb-2 mb-lg-0">SignUp</Button>
                    <Button as={Link} to="/login" variant="light">Login</Button>
                  </>
                }
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
