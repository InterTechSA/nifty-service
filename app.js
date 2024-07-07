const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/user_route');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'docs', 'swagger.json'), 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", routes);

app.get('/test', (req,res) => {
  res.json({message: "Testing Testing"})
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
