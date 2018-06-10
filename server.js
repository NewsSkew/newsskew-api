const app = require('./app');

const articleController = require('./app/controllers/article.controller');

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Watching on port " + port);
});