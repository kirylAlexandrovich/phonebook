const express = require('express');

const phoneBookService = require('./phoneBook.service');

const router = express.Router();

// router.route('/subscriber-form').get((req, res) => {
//     res.sendStatus(400);
// })

router.route('/subscriber').post(async (req, res) => {
    try {
        await phoneBookService.saveSubscriber(req.body);
        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

module.exports = router;
