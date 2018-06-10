/**
 * Controller for Article
 * 
 * @author jskipp
 */

const app = require('../../app');
const articleService = require('../services/article.service');

/**
 * Get an Article by ID
 */
app.get('/article/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400);
        return res.send();
    }

    articleService.findById(req.params.id).then((article) => {
        if (article) {
            res.status(200);
            return res.send(article);
        }

        res.status(404);
        return res.send();
    }, (err) => {
        console.log(err);
        res.status(404);
        return res.send();
    });
});

/**
 * Post a new Article
 */
app.post('/article', (req, res) => {
    if (req && req.body && req.body.title && req.body.url && req.body.authorId && req.body.publisherId) {
        articleService.create(req.body).then((article) => {
            res.status(201);
            res.send(article);
        }, (err) => {
            console.log(err);
            res.status(400);
            res.send();
        });
    } else {
        console.log(req.body);
        res.status(400);
        return res.send();
    }
});

