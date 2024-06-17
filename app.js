const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const routes = require('./api/routes/user_route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

const options = {
  key: fs.readFileSync('./privatekey.pem'),     
  cert: fs.readFileSync('./server.crt')  
};

const PORT = process.env.PORT || 3001;
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on HTTPS port ${PORT}`);
});
