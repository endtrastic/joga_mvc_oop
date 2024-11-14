// Defining important stuff
const express = require('express')
const router = express.Router()
const articleControllerClass = require('../controllers/article')

const articleController = new articleControllerClass()

// Using the controller
router.get('/', (req, res) => articleController.getAllArticles(req, res));

module.exports = router;
