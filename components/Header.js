import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import Link from '../utils/functions/routerFunction';

export default class Header extends Component {
  render() {
    return <Navbar fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <div className="mee-logo">
            <Link href="/">
              <Image src={require('../utils/assets/meeeLogo.png')} responsive />
            </Link>
            {/* <Image src={require('../utils/assets/meeeLogo.png')} responsive /> */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle>
          <Image src={require('../utils/assets/iconHambuglar.png')} responsive />
        </Navbar.Toggle>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {/* <NavItem style={{ zIndex: 6 }} eventKey={1} href="#">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxYellow.png')} alt="" />
              <span className="navbar-link">
                  About Meee
              </span>
            </div>
          </NavItem>
          <NavItem style={{ zIndex: 5 }} eventKey={2} href="#">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxRed.png')} alt="" />
              <span className="navbar-link">
                  Why Meee?
              </span>
            </div>
          </NavItem>
          <NavItem style={{ zIndex: 4 }} eventKey={3} href="#">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxPink.png')} alt="" />
              <span className="navbar-link">
                  Resources
              </span>
            </div>
          </NavItem>
          <NavItem style={{ zIndex: 3 }} eventKey={4} href="#">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxGreen.png')} alt="" />
              <span className="navbar-link">
                  Projects
              </span>
            </div>
          </NavItem>
          <NavItem style={{ zIndex: 2 }} eventKey={5} href="#">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxBlue.png')} alt="" />
              <span className="navbar-link">
                  Shop
              </span>
            </div>
          </NavItem> */}
          <NavItem style={{ zIndex: 1 }} eventKey={6} href="https://www.meee.global">
            <div className="navbar-item">
              <img className="img-responsive navbar-item-image" src={require('../utils/assets/commentBoxYellow.png')} alt="" />
              <span className="navbar-link">
                {/* <NavLink to="/register">Talk to Meee</NavLink> */}
                {/* Talk to Meee */}
                  Go to meee.global
              </span>
            </div>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}
