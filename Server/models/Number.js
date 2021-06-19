const mongoose = require("mongoose");

const NumberSchema = new mongoose.Schema(
    {
        maxBorrowTime: {
            type: Number,
            required: true,
        },
        fine:{
            type: Number,
            required: true,
        },
        maxBorrowBook: {
            type: Number,
        },
        maxReaderAge:{
            type: Number,
        },
        minReaderAge:{
            type: Number,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Number", NumberSchema);