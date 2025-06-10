import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About HydroLink</h1>
      <p>
        HydroLink is a web application designed to monitor and manage water
        quality in real-time. It provides users with the ability to track water
        parameters, view historical data, and receive alerts for any anomalies.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Real-time water quality monitoring</li>
        <li>Historical data analysis</li>
        <li>Alert notifications for critical conditions</li>
      </ul>
      <h2>Technologies Used</h2>
      <p>This application is built using React, Node.js, and MongoDB.</p>
    </div>
  );
}