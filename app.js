'use strict';

const helmet = require('helmet');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const nunjucks = require('nunjucks');

const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

nunjucks.configure(
	'public/views',
	{
		express: app,
		autoescape: true,
	}
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routers/index-router'));

module.exports = app;
