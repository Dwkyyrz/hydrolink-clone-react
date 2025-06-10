import { Children } from "react";
import "./card.css";
import "../../App.css"

export default function Card({txt, logo, value, children}) {
  return (
    <div className="card">
      <div className="header">
        <span className="txt">{txt}</span>
        <div className="logo">{logo}</div>
      </div>
      <span className="value-sensor">{value}</span>
      <span>{children}</span>
    </div>
  );
}