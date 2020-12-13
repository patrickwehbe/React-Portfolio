import React, { useState } from 'react';
import '../components/Header.css'
import Avatar from '@material-ui/core/Avatar'
import profile from '../Images/profile.JPG'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
       <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact Me</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
              <Avatar src={profile} />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
