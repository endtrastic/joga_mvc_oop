const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findMany(id){
        const articles = await super.findMany('id', id)
        return articles
    }

    async findById(id){
        const articles = await super.findById(id)
        return articles
    }
}

module.exports = AuthorModel;