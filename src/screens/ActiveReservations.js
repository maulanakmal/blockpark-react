import React, { Component } from "react";
import ActiveReservationTable from "../components/Table/ActiveReservationTable";

import "./ActiveReservations.css";

export default class ActiveReservations extends Component {
  render() {
    return (
      <div className="ActiveReservations">
        <ActiveReservationTable />
      </div>
    );
  }
}
