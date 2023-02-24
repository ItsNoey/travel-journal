/** @format */

import React from "react";
import Icon from "../images/pisa-icon.png";

export default function Navbar() {
  return (
    <div className="nav">
      <img src={Icon} alt="Pisa icon" className="nav--icon" />
      <p className="nav--title">My Italy Travel Journal</p>
    </div>
  );
}
