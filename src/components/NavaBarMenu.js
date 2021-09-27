import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt, faListOl, faHome, faPlusCircle, faSearchDollar, faSearchLocation, faHotel, faSign, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class NavaBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"> <FontAwesomeIcon icon={faHotel} /> Resto</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                                <Nav.Link href="/list"><FontAwesomeIcon icon={faListOl} /> List</Nav.Link>
                                <Nav.Link href="/create"><FontAwesomeIcon icon={faPlusCircle} /> Create</Nav.Link>
                                {/* <Nav.Link href="/update"><FontAwesomeIcon icon={fa}/> Update</Nav.Link> */}
                                <Nav.Link href="/search"><FontAwesomeIcon icon={faSearchLocation} /> Search</Nav.Link>
                                {
                                    localStorage.getItem('login') ?
                                        <Nav.Link href="/Logout"><FontAwesomeIcon icon={faSignInAlt} /> Logout</Nav.Link>
                                        :
                                        <Nav.Link href="/Login"><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>


                                }
                                {/* <Nav.Link href="#link"><Link to="/update">If this has anyproblem</Link><</Nav.Link> */}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavaBarMenu;