const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()
// Authorize the request
const authorControllerClass = require('./controllers/authorController')
const authorController = new authorControllerClass()

const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/authorRoutes');
app.use('/', articleRoutes)
app.use('/', authorRoutes)

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});