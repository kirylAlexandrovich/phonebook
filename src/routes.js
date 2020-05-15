const { Router } = require('express');

const phoneBookRouter = require('./phoneBook/phoneBook.router');

const router = Router();

router.use('/', phoneBookRouter);

module.exports = router;
