import Connection from './connection';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { resolve } = require('path');
const app = express();
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('trust proxy', 1); // trust first proxy

Connection.buildConnections();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A library to track user hobbies.",
        },
        servers: [
            {
                url: "http://localhost:3002",
            },
        ],
    },
    apis: [`${resolve('src/routes/api.js')}`]
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

module.exports = app;
