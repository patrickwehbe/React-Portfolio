import React, { useState } from 'react';
import '../components/Header.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
  
} from 'reactstrap';
 
  

function Header() {
  
   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

 
    return (
       <div className='header'>
         
      <Navbar className="header" light expand="md">
        <NavbarText><span className="firstName mr-auto">Patrick</span> Wehbe</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem>
              <NavLink className="link" href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
