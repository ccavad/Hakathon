const mongoose = require("mongoose")
const User = require('../model/user.schema')

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // listId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "List",
    //     required: true,
    // },
    status: {
        type: String,
    },
    position: {
        type: Number,
    },
    description: {
        type: String,
        default: null
    },
    deadline: {
        type: Date,
        default: null
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId], // Correctly reference User IDs
        ref: 'User', // This should be the name of the User model
        default: undefined,

    }
},
    {
        timestamps: true,
    })

const CardModel = mongoose.model("CardModel", cardSchema);

module.exports = CardModel