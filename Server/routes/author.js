const router = require("express").Router();
const Author = require("../models/Author");

router.get("/", (req, res) => {
    res.send("hey its author routing");
});

module.exports = router;