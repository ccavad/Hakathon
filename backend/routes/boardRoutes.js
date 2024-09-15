// routes/boardRoutes.js
const express = require('express');
const router = express.Router();
const boardController = require('../controller/board.controller');


// Create a new board
router.post('/boards', boardController.createBoard);

// (Optional) Get all boards for the authenticated user
router.get('/boards', boardController.getUserBoards);

// (Optional) Delete a board
router.delete('/boards/:id', boardController.deleteBoard);

module.exports = router;
