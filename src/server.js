const express = require('express')
const configViewEngine = require('./config/viewEngine');
const app = express(); // app express
const webRoutes = require('./routes/web');
const connection = require('./config/database');

require('dotenv').config()
const port = process.env.PORT || 9999; // port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);
//test connection

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})