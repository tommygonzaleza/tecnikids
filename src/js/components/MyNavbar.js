import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const MyNavbar = () => {
    return(
        <div className="container-fluid">
            <Navbar className="my-navbar row w-100 pr-5" expand="lg">
                <Navbar.Brand href="/" className="my-navbar-brand col-6 col-md-3">
                    <img src="https://i.ibb.co/ww5YDrV/logo-tecnikids.png" alt="Logo" className="my-navbar-logo" />
                </Navbar.Brand>
                <div className="col-1">
                    {''}
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="col-8">
                    <Nav className="my-navbar-nav w-100">
                        <Nav.Link className="my-navlink text-center" href="/">
                            {"Inicio"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/company-view">
                            {"¿Quiénes Somos?"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/academy-view">
                            {"Academia"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/plan-vacacional">
                            {"Plan Vacacional"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/rsc-classification-ii">
                        {"Torneo de Robótica"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/programs-view">
                            {"Programas"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/courses-view">
                            {"Cursos"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="/colegios-view">
                            {"Colegios"}
                        </Nav.Link>
                        <Nav.Link className="my-navlink text-center" href="https://tecnikidsedu.com" target="_blank">
                            {"Plataforma TK"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}