const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const productRouter = require('./routes/products');
const indexRouter = require('./routes/index');
require('dotenv').config();
const clientPath = 'app/build';

const app = express();

app.use(express.static(path.join(__dirname, clientPath)));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/product', productRouter);

module.exports = app;
