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
            <h1>Active Reservations</h1>
          </Col>
          <Col>
            <h1 style={{ textAlign: "right" }}>Available : 10 /20</h1>
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
