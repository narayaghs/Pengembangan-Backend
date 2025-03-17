const express = require ('express');
const app = express();
const port = 3000;
const users = require("./users")
const siswa = require("./siswa")
const presensi = require("./presensi")
const nilai = require("./nilai")
const mapel = require("./mapel")
const kelas = require("./kelas")
const jadwal = require("./jadwal")
const guru = require("./guru")

//menggunakan modul
app.use("/users", users);
app.use("/siswa", siswa);
app.use("/presensi", presensi);
app.use("/nilai", nilai);
app.use("/mapel", mapel);
app.use("/kelas", kelas);
app.use("/jadwal", jadwal);
app.use("/guru", guru);

//routing
app.get("/", (req, res) => {
    res.send("Ambil data");
});
app.post("/", (req, res) => {
    res.send("Kirim data");
});
app.put("/", (req, res) => {
    res.send("Edit data");
});
app.patch("/", (req, res) => {
    res.send("Edit data");
});
app.delete("/", (req, res) => {
    res.send("Hapus data");
});
app.listen(port, () => {
    console.log("Aplikasi berjalan pada : ${port}");
});