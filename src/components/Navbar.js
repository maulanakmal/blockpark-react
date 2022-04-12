import React from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";
import TextLogo from "./TextLogo.js";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Navbar">{this.props.children}</div>;
  }
}
