const NewsController = require('../controllers/news.controller');
const router = require('express').Router();

router.get('/', NewsController.getNewsByQ);

module.exports = router;