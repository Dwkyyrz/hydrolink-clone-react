import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "postcss";
import Navbar from "./component/Navbar";
import Dashboard from "./page/dashboard/Dashboard";
import Riwayat from "./page/riwayat/Riwayat";
import Perhitungan from "./page/perhitungan/Perhitungan";
import Sensor from "./page/sensor/Sensor";
import About from "./page/about/About";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="Container-App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/riwayat" element={<Riwayat />} />
            <Route path="/perhitungan" element={<Perhitungan />} />
            <Route path="/sensor" element={<Sensor />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
