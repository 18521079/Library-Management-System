const router = require("express").Router();
const Number = require("../models/Number");

router.get("/", (req, res) => {
    res.send("hey its number routing");
});

// number category
router.post("/", async (req, res) => {
    const newNumber = Number(req.body);
    try {
        const savedNumber = await newNumber.save();
        res.status(200).json(savedNumber);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update Number
router.put("/", async (req, res) => {
    try {
        const number = await Number.findOne({});        
        await number.updateOne({ $set: req.body });
        res.status(200).json("the number has been updated");
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// // delete Number
// router.delete("/:id", async (req, res) => {
//     try {
//         const category = await Category.findById(req.params.id);
//         if (category.categoryId === req.body.categoryId) {
//             await category.deleteOne();
//             res.status(200).json("the Category has been deleted");
//         } else {
//             res.status(403).json("you can delete only Category");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // get a Number
// router.get("/:id", async (req, res) => {
//     try {
//         const category = await Category.findById(req.params.id);
//         res.status(200).json(category);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// get all Number
router.get("/all/all", async (req, res) => {
    try {
        const number = await Number.findOne({});
        res.status(200).json(number);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;