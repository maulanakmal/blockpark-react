import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import Navbar from "../components/Navbar";
// import TextLogo from "../components/TextLogo";
// import NavbarItem from "../components/NavbarItem";
import ActiveReservations from "./ActiveReservations";
import Profiles from "./Profiles";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div style={style}>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>Blockpark</Navbar.Brand>
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Active Reservations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/reservations">
                  <Nav.Link>Past Reservations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              </Nav>
            </Container>
          </Navbar>

          <div>
            <Routes>
              <Route path="/" element={<ActiveReservations />} />
              <Route path="/reservations" element={<ActiveReservations />} />
              <Route path="/profile" element={<Profiles />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const style = {
  height: "100vh",
  width: "100vw",
};
