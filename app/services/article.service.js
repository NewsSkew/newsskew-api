/**
 * Service for Article
 * 
 * @author jskipp
 */

const Article = require('../models/article.model');

const findById = (articleId) => {
    return Article.findOne({ _id: articleId });
};

module.exports = {
    findById,
};