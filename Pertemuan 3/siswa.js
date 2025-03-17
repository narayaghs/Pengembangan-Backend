const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Siswa`);
});

router.post("/inputsiswa", (req, res) => {
    res.send(`Ini Halaman Input Siswa`);
});

router.put("/editsiswa", (req, res) => {
    res.send(`Ini Halaman Edit Siswa`);
});

router.delete("/deletesiswa", (req, res) => {
    res.send(`Ini Halaman Delete Siswa`);
});


module.exports = router;