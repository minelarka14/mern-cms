const express = require('express');
const app = express.Router();

const db = require('../util/db')

app.post('/create', (req, res) => {
    db.comments.createComment(req.query.user, req.query.body, req.query.post).then(() => {
        res.status(200).json({
            result: 'success'
        })
    }).catch((e) => {
        res.status(500).json({
            result: 'error',
            error: e,
        })
    })
})


module.exports = app;