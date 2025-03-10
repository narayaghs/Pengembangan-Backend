const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`get data book`);
});

router.get("/:id", (req, res) => {
    res.send(`book ID: ${req.params.id}`);
});

module.exports = router;