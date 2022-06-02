import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const MyNavbar = () => {
    return(
        <div className="container-fluid">
            <Navbar className="my-navbar row w-100 pr-5" expand="lg">
                <Navbar.Brand href="/" className="my-navbar-brand col-6 col-md-3">
                    <img src="https://i.ibb.co/VLDVKJC/logo-3.png" alt="Logo" className="my-navbar-logo" />
                </Navbar.Brand>
                <div className="col-1">
                    {''}
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-8">
                    <Nav className="my-navbar-nav w-100">
                        <Nav.Link className="my-navlink" href="/">
                            {"Inicio"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/company-view">
                            {"¿Quiénes Somos?"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/plan-vacacional">
                            {"Plan Vacacional"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/rsc-resultados">
                        {"Torneo de Robótica"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/programs-view">
                            {"Programas"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/courses-view">
                            {"Cursos"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink" href="/colegios-view">
                            {"Colegios"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}