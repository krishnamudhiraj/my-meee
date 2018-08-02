import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image src={require('../utils/assets/meeeLogo.png')} responsive />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle>
            <Image
              src={require('../utils/assets/iconHambuglar.png')}
              responsive
            />
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem style={{ zIndex: 6 }} eventKey={1} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxYellow.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">About Meee</NavLink>
                </span>
              </div>
            </NavItem>
            <NavItem style={{ zIndex: 5 }} eventKey={2} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxRed.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">Why Meee?</NavLink>
                </span>
              </div>
            </NavItem>
            <NavItem style={{ zIndex: 4 }} eventKey={3} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxPink.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">Resources</NavLink>
                </span>
              </div>
            </NavItem>
            <NavItem style={{ zIndex: 3 }} eventKey={4} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxGreen.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">Projects</NavLink>
                </span>
              </div>
            </NavItem>
            <NavItem style={{ zIndex: 2 }} eventKey={5} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxBlue.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">Shop</NavLink>
                </span>
              </div>
            </NavItem>
            <NavItem style={{ zIndex: 1 }} eventKey={6} href="#">
              <div className="navbar-item">
                <img
                  className="img-responsive navbar-item-image"
                  src={require('../utils/assets/commentBoxYellow.png')}
                  alt=""
                />
                <span className="navbar-link">
                  <NavLink to="/register">Talk to Meee</NavLink>
                </span>
              </div>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
