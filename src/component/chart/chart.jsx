import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Data } from "../data";

export default function Chart() {
  const chartData = Data.map((row) => {
    const [dateStr, timeStr] = row.tanggal.split(" ");
    return {
      ...row,
      label: `${timeStr} ${dateStr}`,
    };
  });

  return (
    <div>
      <h3>Grafik pH</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid stroke="grey" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ph" stroke="#27ae60" name="pH" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h3>Grafik TDS</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid stroke="grey" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tds" stroke="#2980b9" name="TDS" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h3>Grafik Kekeruhan</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid stroke="grey" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kekeruhan"
              stroke="#e2330e"
              name="Kekeruhan"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
