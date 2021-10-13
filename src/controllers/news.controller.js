let bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.apikey;

class NewsController {
    static getNewsByQ(req, res) {
        let q = req.query.q;
        let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`;
        axios.get(url)
            .then((response) => {
                let articles = response.data.articles;
                res.render('main', { layout: 'news', articles: articles });
            })
            .catch((err) => {
                res.render('main', { layout: 'main2' });
            })
    }
}

module.exports = NewsController;