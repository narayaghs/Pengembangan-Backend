const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`Ini Halaman Get Users`);
});

router.post("/inputusers", (req, res) => {
    res.send(`Ini Halaman Input Users`);
});

router.put("/editusers", (req, res) => {
    res.send(`Ini Halaman Edit Users`);
});

router.delete("/deleteusers", (req, res) => {
    res.send(`Ini Halaman Delete Users`);
});

module.exports = router;