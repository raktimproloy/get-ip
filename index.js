const express = require('express');
const os = require("os")
const app = express();

app.set('trust proxy', true);

app.get('/',function(req, res) {
    var allNetworkInterfaces = os.networkInterfaces();
    res.send(allNetworkInterfaces);
});

app.listen(3000, () => console.log(`Server is listening on port 3000`))