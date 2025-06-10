import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header({title, subtitle}) {

  return (
    <header className="header-container">
      <div className="welcome">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <div className="about">
      <Link to="/about" className="nav-logo">
        <i
          className="fi fi-rs-info"
        ></i>
      </Link>
      </div>
    </header>
  );
}
