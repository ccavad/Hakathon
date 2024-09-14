require("dotenv").config()
const router = require("express").Router()

const ListModel = require("../model/list.schema")

router.post("/list", async (req, res, next) => {
    const { title, cardId } = req.body;
    try {
        const newList = await ListModel.create({ title, cardId })
        return res.status(200).send(newList);
    } catch (error) {
        next(error);
        res.status(500).send({ message: error.message })
    }
})

router.get("/list", async (req, res, next) => {
    const { title, cardId } = req.body;
    try {
        const newList = await ListModel.find()
        return res.status(200).send(newList);
    } catch (error) {
        next(error);
        res.status(500).send({ message: error.message })
    }
})

module.exports = router


