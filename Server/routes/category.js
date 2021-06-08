const router = require("express").Router();
const Category = require("../models/Category");

router.get("/", (req, res) => {
    res.send("hey its category routing");
});

module.exports = router;