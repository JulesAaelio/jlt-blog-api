const app = require('./config/express');
console.log("App started at  " , new Date().toLocaleString());

app.listen(process.env.SRV_PORT);