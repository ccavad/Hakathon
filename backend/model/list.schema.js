const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        cardId: [
            {
                type: mongoose.Types.ObjectId,
                ref: "CardModel",
            },
        ],
        board: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const ListModel = mongoose.model("List", listSchema);

module.exports = ListModel;
