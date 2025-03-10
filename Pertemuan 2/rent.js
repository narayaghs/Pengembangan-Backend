const express = require("express");
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`get data rent`);
});

router.get("/:id", (req, res) => {
    res.send(`rent ID: ${req.params.id}`);
});

module.exports = router;