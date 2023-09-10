"use strict";
const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => {
    let oleg = "oleg";
    res.send(oleg);
});
app.listen(port, () => {
    console.log('server start on http://localhost:%s', port);
});
