const express = require("express");
const app = express();
const compression = require("compression");
const cors = require("cors");

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// ROUTE
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(9000)
