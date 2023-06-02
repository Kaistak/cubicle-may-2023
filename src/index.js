const express = require('express');
const handlebars = require('express-handlebars');
const expresssConfig = require('./config/expressConfig');

const app = express();

const PORT = 5000;

// handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
expresssConfig(app);

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, () => console.log('Server is runnig on port 5000...'));