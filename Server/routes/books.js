const router = require("express").Router();
const User = require("../models/Book");

router.get("/", (req, res) => {
    res.send("hey its books routing");
});

module.exports = router;