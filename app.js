const express = require('express');

const bodyParse = require('body-parser');

const app = express();

const projectsRoute = require('./routes/project.js');

const middlewareLogRequest = require('./middleware/log.js')

app.use(middlewareLogRequest);

app.use(bodyParse.json());

app.use('/projects', projectsRoute);

module.exports = app;