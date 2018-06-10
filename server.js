const express = require('express');

const mongoose = require('./app/mongoose/mongoose.js');

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    return res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Watching on port " + port);
});