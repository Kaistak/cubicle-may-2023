const express = require('express');
const expresssConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes')

const app = express();
const PORT = 5000;

expresssConfig(app);
handlebarsConfig(app);
app.use(routes);


app.listen(PORT, () => console.log('Server is runnig on port 5000...'));