import React, { Component } from "react";
import { Table, Card, Badge, Button, Pagination } from "react-bootstrap";

import { data } from "./data.js";

const BATCH = 12;

export default class ActiveReservationTable extends Component {
  constructor(props) {
    super(props);
    this.page = 0;
    this.state = {
      reservations: this.fetchData(0),
    };

    this.paginationPrev = this.paginationPrev.bind(this);
    this.paginationNext = this.paginationNext.bind(this);
  }

  fetchData(page) {
    const startIndex = page * BATCH;
    const endIndex = startIndex + BATCH;

    console.log(startIndex, endIndex);

    return data.reservations.slice(startIndex, endIndex);
  }

  paginationPrev() {
    if (this.page == 0) {
      return;
    }

    this.page--;

    const reservations = this.fetchData(this.page);
    this.setState({
      reservations: reservations,
    });

    console.log("page : " + this.page);
  }

  paginationNext() {
    this.page++;

    const reservations = this.fetchData(this.page);

    if (reservations.length == 0) {
      this.page--;
      return;
    }

    this.setState({
      reservations: reservations,
    });

    console.log("page : " + this.page);
  }

  render() {
    return (
      <div>
        <Table striped bordered hover size="md">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Occupier Id</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reservations.map((row, index) => (
              <tr key={index.toString()}>
                <th>{row.reservation_id}</th>
                <th style={{ textAlign: "center" }}>{row.occupier_id}</th>
                <th style={{ textAlign: "center" }}>
                  <Badge> {row.status}</Badge>
                </th>
                <th style={{ textAlign: "center" }}>{row.start_time}</th>
                <th style={{ textAlign: "center" }}>
                  <Button variant="outline-primary" size="sm">
                    End
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Pagination>
            <Pagination.Prev onClick={this.paginationPrev} />
            <Pagination.Next onClick={this.paginationNext} />
          </Pagination>
        </div>
      </div>
    );
  }
}
