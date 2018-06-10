const mongoose = require('mongoose');

const properties = require('./mongodb.properties.json');

let mongodbURI = 'mongodb://localhost/';

try {
    mongodbURI = properties.mongodb.uri;
} catch (error) {
    // Do Nothing
}

console.log('MongoDB connecting to ' + mongodbURI);
mongoose.connect(mongodbURI);

module.exports = mongoose;