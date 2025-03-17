const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Kelas`);
});

router.post("/inputkelas", (req, res) => {
    res.send(`Ini Halaman Input Kelas`);
});

router.put("/editkelas", (req, res) => {
    res.send(`Ini Halaman Edit Kelas`);
});

router.delete("/deletekelas", (req, res) => {
    res.send(`Ini Halaman Delete Kelas`);
});

module.exports = router;