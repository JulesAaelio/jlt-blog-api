const express = require('express');

module.exports = () => {
    const router = express.Router();

    router.get('/me', (req, res) => {
        res.send(req.user);
    });

    return router;
};