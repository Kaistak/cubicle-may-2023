const express = require('express');
const expresssConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect= require('./config/dbConfig');
const routes = require('./routes');

const app = express();
const PORT = 5000;

expresssConfig(app);
handlebarsConfig(app);
dbConnect()
    .then(() => console.log('Db Connected sucssesfully'))
    .catch((err) => console.log('Db err', err))

app.use(routes);

app.listen(PORT, () => console.log('Server is runnig on port 5000...'));