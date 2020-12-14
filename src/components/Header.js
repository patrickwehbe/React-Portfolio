import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../components/Header.css'


 
  

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

 
    return (
       <div className='header'>
         
       <Navbar className="navbar">
         
        <NavbarBrand href="/" className="mr-auto name "><span className="firstName">Patrick </span>Wehbe</NavbarBrand>
        
              <NavLink className="link" href="/components/">About Me</NavLink>
            
            
              <NavLink className="link" href="https://github.com/reactstrap/reactstrap">Projects</NavLink>
            
            
              <NavLink className="link" href="https://github.com/reactstrap/reactstrap">Blog</NavLink>
            
            
              <NavLink className="link" href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
