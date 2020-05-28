import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo-1.png';

export const MyNavbar = () => {
    return(
        <Navbar className="my-navbar" expand="lg">
			<Navbar.Brand href="/" className="my-navbar-brand">
                <img src={logo} alt="Logo" className="my-navbar-logo" />
			</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="my-navbar-box1">
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="">
                        <Nav.Link className="my-navlink" href="#que-hacemos">
                            {"¿Quiénes Somos?"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="#como-funciona">
                            {"Programas"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/signInView">
                            {"Cursos"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/register">
                            {"Colegios"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/register">
                            {"Eventos"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/register">
                            {"Contacto"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            
		</Navbar>
    )
}