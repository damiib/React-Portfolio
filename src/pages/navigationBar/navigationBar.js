import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {navigationLinks} from '../../Components/navigationLinks'
import './navigationBar.css'


function createLinks(){
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
    return (
        <div id="home">
            <Navbar className="nav_containger" expand="md">
            <Navbar.Brand href="#home">Damali's Portfolio</Navbar.Brand> 
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse>
                  <Nav className="links" style={{margin:'0'}}>
                  {createLinks()}
                 </Nav>

                  </Navbar.Collapse>  
            </Navbar>
        </div>
    )
}

export default NavigationBar;
