const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const router = require("./controllers");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, function () {
    console.log(`Now listening on port: http://localhost:${PORT}`);
});