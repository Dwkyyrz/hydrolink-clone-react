import React, { useState } from "react";
import { Data } from "../data";
import "../../App.css";
import "./table.css";

export default function Table() {
  const [tableData] = useState(Data);

  return (
    <div class="table-container">
      <table class="table">
        <thead class="table-header">
          <tr>
            <th>No</th>
            <th>Tanggal & Waktu</th>
            <th>pH</th>
            <th>TDS (PPM)</th>
            <th>Kekeruhan (NTU)</th>
            <th>Tegangan Sensor</th>
            <th>Status Fuzzy</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => {
            const [dateStr, timeStr] = row.tanggal.split(" ");
            const dateObj = new Date(`${dateStr}T${timeStr}`);
            const formattedDate = dateObj.toLocaleDateString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
            const formattedTime = dateObj.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            });
            return (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td>
                  {formattedTime} <br />
                  {formattedDate}
                </td>
                <td>
                  {row.ph} <br /> {getPhBadge(row.ph)}
                </td>
                <td>
                  {row.tds} <br /> {getTDSBadge(row.tds)}
                </td>
                <td>
                  {row.kekeruhan} <br /> {getTurbidityBadge(row.kekeruhan)}
                </td>
                <td>
                  PH: {row.tegangan_ph} Volt <br />
                  TDS: {row.tegangan_tds} Volt <br />
                  Kekeruhan: {row.tegangan_kekeruhan} Volt
                </td>
                <td>
                  {row.status} <br />
                  {getStatusBadge(row.status)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function getPhBadge(ph) {
  let label, color;
  if (ph < 6.5) {
    label = "Asam";
    color = "#e74c3c"; 
  } else if (ph >= 6.5 && ph <= 8.5) {
    label = "Normal";
    color = "#27ae60"; 
  } else {
    label = "Basa";
    color = "#2980b9"; 
  }
  return (
    <span style={{
      background: color,
      color: "#fff",
      padding: "2px 8px",
      borderRadius: "8px",
      fontSize: "0.85em"
    }}>
      {label}
    </span>
  );
}
function getTDSBadge(tds) {
  let label, color; 
  tds < 300
    ? ((label = "Rendah"), (color = "#27ae60"))
    : tds <= 600
    ? ((label = "Sedang"), (color = "#2980b9"))
    : ((label = "Tinggi"), (color = "#e2330e"));
  return (
    <span style={{
      background: color,
      color: "#fff",
      padding: "2px 8px",
      borderRadius: "8px",
      fontSize: "0.85em"
    }}>
      {label}
    </span>
  );
}
function getTurbidityBadge(kekeruhan) {
  let label, color;
  kekeruhan < 3
    ? ((label = "Rendah"), (color = "#27ae60"))
    : kekeruhan <= 20
    ? ((label = "Sedang"), (color = "#2980b9"))
    : ((label = "Tinggi"), (color = "#e2330e"));
  return (
    <span
      style={{
        background: color,
        color: "#fff",
        padding: "2px 8px",
        borderRadius: "8px",
        fontSize: "0.85em",
      }}
    >
      {label}
    </span>
  );
}
function getStatusBadge(status) {
  let label, color;
  status < 7
    ? ((label = "Tidak Tercemar"), (color = "#2980b9"))
    : ((label = "Tercemar"), (color = "#e2330e"));
  return (
    <span
      style={{
        background: color,
        color: "#fff",
        padding: "2px 8px",
        borderRadius: "8px",
        fontSize: "0.85em",
      }}
    >
      {label}
    </span>
  );
}
