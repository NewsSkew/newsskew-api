const mongoose = require('../mongoose/mongoose.js');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    url: String,
    authorId: String,
    publisherId: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

const article = mongoose.model('Article', articleSchema);

module.exports = article;