import React, { Component } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";

import "./ActiveReservationTable.css";

export default class ActiveReservationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          reservation_id: "id1",
          occupier_id: "occupier1",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id2",
          occupier_id: "occupier2",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id3",
          occupier_id: "occupier3",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id4",
          occupier_id: "occupier4",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id5",
          occupier_id: "occupier5",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id1",
          occupier_id: "occupier1",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id2",
          occupier_id: "occupier2",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id3",
          occupier_id: "occupier3",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id4",
          occupier_id: "occupier4",
          status: "active",
          start_time: 12312321313,
        },
        {
          reservation_id: "id5",
          occupier_id: "occupier5",
          status: "active",
          start_time: 12312321313,
        },
      ],
    };
  }

  render() {
    return (
      <div className="ActiveReservationTable">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reservation ID</TableCell>
                <TableCell>Occupier Id</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((row) => (
                <TableRow key={row.reservation_id}>
                  <TableCell>{row.reservation_id}</TableCell>
                  <TableCell>{row.occupier_id}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.start_time}</TableCell>
                  <TableCell>end button</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination />
        </TableContainer>
      </div>
    );
  }
}
