const express = require('express');
const app = express();
const router = express.Router();
// router de users
const newsRoutes = require('./src/routes/news');
const path = require('path');
const handlebars = require('express-handlebars');

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static('styles'));
// primer styles es qué carpeta pedimos de HTML
// app.use('/styles', express.static(path.join(__dirname, 'styles')));

router.get('/', (req, res) => {
    // res.render('main', { layout: 'news' });
    res.render('main', { layout: 'main2' });
})

const port = process.env.PORT || 3000;

// se usará router en toda la app.
app.use(router);

// usar router de users
app.use('/news', newsRoutes);

app.listen(port, () => {
    console.log('App is listening in port: ' + port);
})