import React, { Component } from "react";
import { Row, Col, Container, Button, Badge } from "react-bootstrap";
import ActiveReservationTable from "../components/Table/ActiveReservationTable";

export default class ActiveReservations extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col>
            <h2>Active Reservations</h2>
          </Col>
          <Col>
            <h2 style={{ textAlign: "right" }}>Capacity: 10/20</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ActiveReservationTable />
          </Col>
        </Row>
      </Container>
    );
  }
}
