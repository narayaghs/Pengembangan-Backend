const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Presensi`);
});

router.post("/inputpresensi", (req, res) => {
    res.send(`Ini Halaman Input Presensi`);
});

router.put("/editpresensi", (req, res) => {
    res.send(`Ini Halaman Edit Presensi`);
});

router.delete("/deletepresensi", (req, res) => {
    res.send(`Ini Halaman Delete Presensi`);
});
module.exports = router;