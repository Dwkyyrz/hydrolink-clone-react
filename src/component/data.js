// Utility function to generate random voltage between 3.00 and 3.80
function getRandomVoltage() {
  return (Math.random() * (3.8 - 3.0) + 3.0).toFixed(2);
}

export const Data = [
  {
    no: 1,
    tanggal: "2023-03-15 10:00:00",
    ph: 7.0,
    tds: 300,
    kekeruhan: 5,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.0,
  },
  {
    no: 2,
    tanggal: "2023-03-15 10:05:00",
    ph: 6.8,
    tds: 320,
    kekeruhan: 6,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.05,
  },
  {
    no: 3,
    tanggal: "2023-03-15 10:10:00",
    ph: 7.2,
    tds: 310,
    kekeruhan: 7,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.1,
  },
  {
    no: 4,
    tanggal: "2023-03-15 10:15:00",
    ph: 7.5,
    tds: 350,
    kekeruhan: 8,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.15,
  },
  {
    no: 5,
    tanggal: "2023-03-15 10:20:00",
    ph: 6.5,
    tds: 400,
    kekeruhan: 10,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.2,
  },
  {
    no: 6,
    tanggal: "2023-03-15 10:25:00",
    ph: 7.1,
    tds: 290,
    kekeruhan: 4,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.25,
  },
  {
    no: 7,
    tanggal: "2023-03-15 10:30:00",
    ph: 6.9,
    tds: 330,
    kekeruhan: 9,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.3,
  },
  {
    no: 8,
    tanggal: "2023-03-15 10:35:00",
    ph: 7.3,
    tds: 280,
    kekeruhan: 3,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.35,
  },
  {
    no: 9,
    tanggal: "2023-03-15 10:40:00",
    ph: 7.0,
    tds: 360,
    kekeruhan: 11,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.4,
  },
  {
    no: 10,
    tanggal: "2023-03-15 10:45:00",
    ph: 6.7,
    tds: 390,
    kekeruhan: 12,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.45,
  },
  {
    no: 11,
    tanggal: "2023-03-15 10:50:00",
    ph: 7.4,
    tds: 295,
    kekeruhan: 5,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.5,
  },
  {
    no: 12,
    tanggal: "2023-03-15 10:55:00",
    ph: 7.2,
    tds: 305,
    kekeruhan: 6,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.55,
  },
  {
    no: 13,
    tanggal: "2023-03-15 11:00:00",
    ph: 6.6,
    tds: 410,
    kekeruhan: 13,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.6,
  },
  {
    no: 14,
    tanggal: "2023-03-15 11:05:00",
    ph: 7.0,
    tds: 320,
    kekeruhan: 7,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.65,
  },
  {
    no: 15,
    tanggal: "2023-03-15 11:10:00",
    ph: 7.1,
    tds: 340,
    kekeruhan: 8,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.7,
  },
  {
    no: 16,
    tanggal: "2023-03-15 11:15:00",
    ph: 6.8,
    tds: 370,
    kekeruhan: 10,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.75,
  },
  {
    no: 17,
    tanggal: "2023-03-15 11:20:00",
    ph: 7.3,
    tds: 285,
    kekeruhan: 4,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.8,
  },
  {
    no: 18,
    tanggal: "2023-03-15 11:25:00",
    ph: 7.0,
    tds: 355,
    kekeruhan: 9,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.85,
  },
  {
    no: 19,
    tanggal: "2023-03-15 11:30:00",
    ph: 6.9,
    tds: 400,
    kekeruhan: 14,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.9,
  },
  {
    no: 20,
    tanggal: "2023-03-15 11:35:00",
    ph: 7.2,
    tds: 300,
    kekeruhan: 5,
    tegangan_ph: getRandomVoltage(),
    tegangan_tds: getRandomVoltage(),
    tegangan_kekeruhan: getRandomVoltage(),
    status: 2.95,
  },
];
