// Defining important stuff
const express = require('express');
const router = express.Router();
const authorControllerClass = require('../controllers/authorController');

const authorController = new authorControllerClass() 

// Route to get author by ID 
router.get('/author/:id', (req, res) => authorController.getAuthorById(req, res));

// Exportin :()
module.exports = router;
