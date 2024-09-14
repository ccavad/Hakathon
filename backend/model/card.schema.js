const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    listId: {
        type: mongoose.Types.ObjectId,
        ref: "ListModel",
        required: true,
    }
},
    {
        timestamps: true,
    })

const CardModel = mongoose.model("CardModel", cardSchema);

module.exports = CardModel