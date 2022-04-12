import React, { Component } from "react";

import "./PastReservations.css";
import PastReservationTable from "../components/Table/PastReservationTable";

export default class PastReservations extends Component {
  render() {
    return (
      <div className="PastReservations">
        <PastReservationTable />
      </div>
    );
  }
}
