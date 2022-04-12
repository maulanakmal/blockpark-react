import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Main.css";

// import Navbar from "../components/Navbar";
// import TextLogo from "../components/TextLogo";
// import NavbarItem from "../components/NavbarItem";
import ActiveReservations from "./ActiveReservations";
import PastReservations from "./PastReservations";
import Profiles from "./Profiles";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Main">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>Blockpark</Navbar.Brand>
              <Nav className="me-auto">
                <LinkContainer to="/" element={<PastReservations />}>
                  <Nav.Link>Active Reservations</Nav.Link>
                </LinkContainer>
                <LinkContainer
                  to="/reservations"
                  element={<PastReservations />}
                >
                  <Nav.Link>Past Reservations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile" element={<PastReservations />}>
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
          </Navbar>

          <div className="ContentContainer">
            <Routes>
              <Route path="/" element={<ActiveReservations />} />
              <Route path="/reservations" element={<PastReservations />} />
              <Route path="/profiles" element={<Profiles />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
