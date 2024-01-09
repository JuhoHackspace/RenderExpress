const express = require('express');
const PIXI = require('pixi.js');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.listen(port, function() {
    console.log("Listening to port "+port);
});

module.exports = app;