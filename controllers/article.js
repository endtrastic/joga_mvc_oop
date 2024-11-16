const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const article = []
    }
    async getAllArticles(req, res) {
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }

    async createNewArticle(req, res){
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        const articleId = await articleModel.create(newArticle)
        res.status(201).json({
            message: `Article created successfully, with the id: ${articleId}`,
            article: {id: articleId, ...newArticle}
        })
    }

    async EditArticleById(req, res){
        const UpdateA = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }

        const articleId = await articleModel.update(req.params.id, UpdateA)
        res.status(201).json({
            message: `Article updated successfully`,
            article: {id: articleId, ...UpdateA}
        })
    }

    async DeleteArticleById(req, res){
        await articleModel.delete(req.params.id)

        res.status(201).json({
            message: `Article deleted successfully, with the id: ${req.params.id}`,
        })
    }

}

module.exports = articleController