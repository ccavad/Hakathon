const router = require("express").Router()

const CardModel = require("../model/card.schema");

router.post("/card", async (req, res, next) => {
    const { title, listId } = req.body;
    try {
        const newCard = await CardModel.create({ title, listId })
        return res.status(200).send(newCard);
    } catch (error) {
        next(error);
        res.status(500).send({ message: error.message })
    }
})

router.get("/card", async (req, res, next) => {
    const { title, listId } = req.body;
    try {
        const newCard = await CardModel.find()
        return res.status(200).send(newCard);
    } catch (error) {
        next(error);
        res.status(500).send({ message: error.message })
    }
})

module.exports = router