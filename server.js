const express = require('express')
const port = process.env.PORT || 8080;
const app = express()

app.use(express.static(__dirname + "/client/dist"))
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/client/dist/index.html")
})
app.listen(port);

console.log('Server started...');

//"start": "npm run dev",