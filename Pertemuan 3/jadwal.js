const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Jadwal`);
});

router.post("/inputjadwal", (req, res) => {
    res.send(`Ini Halaman Input Jadwal`);
});

router.put("/editjadwal", (req, res) => {
    res.send(`Ini Halaman Edit Jadwal`);
});

router.delete("/deletejadwal", (req, res) => {
    res.send(`Ini Halaman Delete Jadwal`);
});

module.exports = router;