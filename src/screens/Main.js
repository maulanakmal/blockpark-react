import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Main.css";
import Navbar from "../components/Navbar";
import TextLogo from "../components/TextLogo";
import NavbarItem from "../components/NavbarItem";
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
          <Navbar>
            <TextLogo />
            <NavbarItem name="Active Reservations" link="/" />
            <NavbarItem name="Past Reservations" link="/reservations" />
            <NavbarItem name="Profiles" link="/profiles" />
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
