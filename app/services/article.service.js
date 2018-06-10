/**
 * Service for Article
 * 
 * @author jskipp
 */

const Article = require('../models/article.model');

/**
 * Get an Article from the ID
 * 
 * @param {*} articleId 
 */
const findById = (articleId) => {
    return Article.findById(articleId);
};

/**
 * Save an Article
 * 
 * @param {*} article 
 */
const create = (article) => {
    let newArticle = new Article({
        title: article.title,
        url: article.url,
        authorId: article.authorId,
        publisherId: article.publisherId,
        date: article.date,
    });

    return newArticle.save();
};

module.exports = {
    findById,
    create,
};