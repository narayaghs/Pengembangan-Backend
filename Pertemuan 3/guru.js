const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Guru`);
});

router.post("/inputguru", (req, res) => {
    res.send(`Ini Halaman Input Guru`);
});

router.put("/editguru", (req, res) => {
    res.send(`Ini Halaman Edit Guru`);
});

router.delete("/deleteguru", (req, res) => {
    res.send(`Ini Halaman Delete Guru`);
});

module.exports = router;