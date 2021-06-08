const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("hey its user routing");
});

module.exports = router;