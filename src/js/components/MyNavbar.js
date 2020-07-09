import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo-3.png';

export const MyNavbar = () => {
    return(
        <div className="container-fluid">
            <Navbar className="my-navbar row w-100" expand="lg">
                <Navbar.Brand href="/" className="my-navbar-brand col-4 col-md-3">
                    <img src={logo} alt="Logo" className="my-navbar-logo" />
                </Navbar.Brand>
                <div className="col-2">
                    {''}
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-6">
                    <Nav className="my-navbar-nav">
                        <Nav.Link className="my-navlink" href="/company-view">
                            {"¿Quiénes Somos?"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/programs-view">
                            {"Programas"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/courses-view">
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
            </Navbar>
        </div>

    )
}