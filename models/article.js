const BaseSQLModel = require('./base.js')

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findAll(){
        const articles = await super.findAll()
        return articles
    }
}

module.exports = ArticleModel;