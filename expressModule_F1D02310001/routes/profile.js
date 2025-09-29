const express = require("express");
const router = express.Router();

const profiles = [
  {
    nim: "F1D02310001",
    nama: "Ahmad Muslihul Khair",
    jurusan: "Teknik Informatika",
    umur: 20,
    hobi: "Membaca Novel",
  },
  {
    nim: "F1D02310141",
    nama: "Umam Alfarizi Uchiha",
    jurusan: "Teknik Informatika",
    umur: 144,
    hobi: "Futsal",
  },
  {
    nim: "F1D02310000",
    nama: "Gojo Kiko",
    jurusan: "Teknik Perwibuan",
    umur: 8,
    hobi: "Nonton Anime",
  },
];

router.get("/", (req, res) => {
  res.json(profiles);
});

router.get("/:nim", (req, res) => {
  const nim = req.params.nim;
  const profile = profiles.find((p) => p.nim === nim);

  if (profile) {
    console.log(`Permintaan GET /profile/${nim} berhasil.`);
    res.json(profile);
  } else {
    res
      .status(404)
      .json({ message: `Profil dengan NIM ${nim} tidak ditemukan.` });
  }
});

module.exports = router;
