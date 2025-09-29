const express = require("express");
const app = express();
const port = 3000;

const { tambah, kali } = require("./utils/math");
const profileRouter = require("./routes/profile");

app.get("/", (req, res) => {
  const nim = "F1D02310001";
  const nama = "Ahmad Muslihul Khair";
  res.send(`NIM: ${nim}, Nama: ${nama}`);
});

app.get("/hitung", (req, res) => {
  const hasilkali = kali(14, 41);
  const hasilTambah = tambah(100, 15);
  res.send(
    `Hasil penjumlahan 100 + 15 adalah: ${hasilTambah}, Hasil perkalian 14 * 41 adalah: ${hasilkali}`
  );
});

app.use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server : http://localhost:${port}`);
});
