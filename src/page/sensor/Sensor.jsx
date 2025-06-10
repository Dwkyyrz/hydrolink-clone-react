import Header from "../../component/header/Header";
import Card from "../../component/card/card";
import "../../App.css";
import Table from "../../component/table/table";
import Chart from "../../component/chart/chart";

const Sensor = () => {
  return (
    <>
      <main className="main-content">
        <Header title="Sensor" subtitle="Monitoring Data Sensor" />
        <MonitorData />
      </main>
    </>
  );
};
export default Sensor;

function MonitorData() {
  return (
    <div className="monitor-container">
      <div className="card-container">
        <Card
          txt="PH Sensor"
          logo={
            <img
              src="../../src/assets/image/icons/ph-balance.png"
              alt="PH icon"
              className="icon"
            ></img>
          }
          value="7.0"
        >
          <span className="keterangan">Sensor yang terpasang</span>
        </Card>
        <Card
          txt="TDS Sensor"
          logo={
            <img
              src="../../src/assets/image/icons/tds.png"
              alt="PH icon"
              className="icon"
            ></img>
          }
          value="300"
        >
          <span className="keterangan">Sensor yang terpasang</span>
        </Card>
        <Card
          txt="Turbidity Sensor"
          logo={
            <img
              src="../../src/assets/image/icons/turbidity.png"
              alt="PH icon"
              className="icon"
            ></img>
          }
          value="5"
        >
          <span className="keterangan">Sensor yang terpasang</span>
        </Card>
        <Card
          txt="Tegangan PH"
          logo={<i class="fa-solid fa-bolt"></i>}
          value="3.01"
        >
          <span className="keterangan">Volt</span>
        </Card>
        <Card
          txt="Tegangan TDS"
          logo={<i class="fa-solid fa-bolt"></i>}
          value="3.01"
        >
          <span className="keterangan">Volt</span>
        </Card>
        <Card
          txt="Tegangan Turbidity"
          logo={<i class="fa-solid fa-bolt"></i>}
          value="3.01"
        >
          <span className="keterangan">Volt</span>
        </Card>
      </div>
      <div className="result-container">
        <Card
          txt="Hasil Klafisikasi"
          logo={
            <img
              src="../../src/assets/image/icons/ph-balance.png"
              alt="PH icon"
              className="icon"
            ></img>
          }
          value={<strong className="result">AIR DALAM KONDISI BAIK</strong>}
        >
          <div className="keterangan-container">
            <div className="fuzzy">
              <strong>Fuzzy Mamdani</strong>
              <ul>
                <li>α Tercemar: 0.000</li>
                <li>α Tidak Tercemar: 0.678</li>
                <li>Titik Potong t₁: 2.256</li>
                <li>Titik Potong t₂: 6.000</li>
                <li>Total Momen: 6.962</li>
                <li>Luas Area: 2.798</li>
                <li>Nilai Crisp: 2.489</li>
              </ul>
            </div>
            <div className="keterangan-air">
              <strong>Keterangan</strong>
              <ul>
                <li>
                  Keterangan Aman untuk konsumsi manusia (dengan pengolahan
                  standar)
                </li>
                <li>Dapat digunakan untuk budidaya ikan</li>
                <li>Ekosistem sungai tetap terjaga</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}