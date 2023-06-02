const express = require('express');
const expresssConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 5000;

expresssConfig(app);
handlebarsConfig(app);

app.use(homeController)

app.listen(PORT, () => console.log('Server is runnig on port 5000...'));