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
    },
    {
        timestamps: true,
    },
);

const ListModel = mongoose.model("List", listSchema);

module.exports = ListModel;
