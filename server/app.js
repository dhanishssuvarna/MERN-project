const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// DB
require('./db/conn');

// Schema
const User = require('./model/userSchema');

// Process data in Json format
app.use(express.json());

// Link to router file
app.use(require('./router/auth'));

// Middleware
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
};

app.get('/', (req, res) => {
    res.send('Hello From The Server');
});

app.get('/about', middleware, (req, res) => {
    res.send('Hello From The About');
});

app.get('/contact', (req, res) => {
    res.send('Hello From The Contact');
});

app.get('/signin', (req, res) => {
    res.send('Hello From The SignIn');
});

app.get('/signup', (req, res) => {
    res.send('Hello From The SignUp');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is Listening At port number : ${PORT}`);
});
