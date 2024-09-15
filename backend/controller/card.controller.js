const router = require("express").Router()

const CardModel = require("../model/card.schema");

router.post("/card", async (req, res, next) => {
    const { title, status } = req.body;
    try {
        const newCard = await CardModel.create({ title, status })
        return res.status(200).send(newCard);
    } catch (error) {
        next(error);
        res.status(500).send({ message: error.message })
    }
})
router.put("/card", async (req, res, next) => {
    const { title, cardId, status } = req.body;
    try {
        const newCard = await CardModel.findById(cardId)
        console.log(newCard);
        newCard.status = status;
        newCard.title = title;
        newCard.description = title;
        await newCard.save();
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