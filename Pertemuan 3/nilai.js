const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Nilai`);
});

router.post("/inputnilai", (req, res) => {
    res.send(`Ini Halaman Input Nilai`);
});

router.put("/editnilai", (req, res) => {
    res.send(`Ini Halaman Edit Nilai`);
});

router.delete("/deletenilai", (req, res) => {
    res.send(`Ini Halaman Delete Nilai`);
});

module.exports = router;