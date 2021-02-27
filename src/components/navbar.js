import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/** 
*@author
*@function Nav_
*/

const Nav_ = (props) => {
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/edit">Editar un Post</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default Nav_;


{/* <div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <link to="/edit">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Formulario de Edición</a>
    </li>
    </link>
</ul>
</div> */}