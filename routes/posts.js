const express = require('express');
const app = express.Router();

const db = require('../util/db');

/* POST */
app.post('/create', function(req, res) {
    db.createPost({
        meta: {
            user: req.query.user,
            createdAt: (new Date).toISOString(),
            likes: 0,
            comments: []
        },
        data: {
            title: req.query.title,
            subtitle: req.query.subtitle,
            body: req.query.body,
        }
    }).then(() => {
        res.status(200).json({
            result: 'success',
        })
    }).catch((e) => {
        res.status(500).json({
            result: 'error',
            error: e,
        })
    })
});

/* GET */

app.get('/one', (req, res) => {
    db.getPost(req.query.id).then((result) => {
        if (result.error) {
            res.status(204).json({
                result: 'Not Found'
            })
        }else {
            res.status(200).json({
                result: 'success',
                data: result
            })
        }
    }).catch((e) => {
        console.log('a')
        res.status(500).json({
            result: 'error',
            error: e,
        })
    })
})

module.exports = app;
