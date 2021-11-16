import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navLinks} from '../helpers/navLinks'



function createLinks(){
    return navLinks.map((e, idex)=> (
    <Nav.Link key={idex} href={e.ref}>{e.name}</Nav.Link>
        ))
}
function navBar() {
    return (
        <div id="home">
            <Navbar expand="md">
          <Navbar.Brand href="#home">Damali</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
<Nav>
    {createLinks()}
</Nav>

          </Navbar.Collapse>
          </navBar> 
        </div>
    )
}

export default navBar
