// Defining important stuff
const express = require('express')
const router = express.Router()
const articleControllerClass = require('../controllers/article')

const articleController = new articleControllerClass()

// Using the controller
router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res));
router.patch('/article/edit/:id', (req, res) => articleController.EditArticleById(req, res));
router.delete('/article/del/:id', (req, res) => articleController.DeleteArticleById(req, res));

module.exports = router;
