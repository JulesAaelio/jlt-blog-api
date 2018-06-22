const app = require('./config/express');
const db = require('./config/sequelize');
console.log("App started at  " , new Date().toLocaleString());

app.use('/articles',require('./endpoints/articles')(db));

app.listen(process.env.SRV_PORT);
