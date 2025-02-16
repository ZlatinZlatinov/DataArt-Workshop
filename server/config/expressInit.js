const config = require('./config');

const express = require('express');
const cors = require('cors');

function expressInit(app) {
    app.use(express.json());
    app.use(cors({
        origin: config.origin,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'X-Authorization']
    }));
} 

module.exports = {
    expressInit
}