const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Mapel`);
});

router.post("/inputmapel", (req, res) => {
    res.send(`Ini Halaman Input Mapel`);
});

router.put("/editmapel", (req, res) => {
    res.send(`Ini Halaman Edit Mapel`);
});

router.delete("/deletemapel", (req, res) => {
    res.send(`Ini Halaman Delete Mapel`);
});


module.exports = router;