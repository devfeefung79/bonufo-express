const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//middlewares
//app.use(auth);

const app = express();
const PORT = 3001;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BONUFO Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001/",
      },
    ],
  },
  apis: ["./routes/essayRoutes.js", "./routes/feedbackRoutes.js", "./routes/questionRoutes.js", "./routes/userRoutes.js"],
};

const specs = swaggerJsdoc(options);

const allowedDomains = ["https://bonufo-react.vercel.app"]

var corsOptions = {
  origin: allowedDomains,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

//import routes
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const essayRoutes = require('./routes/essayRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use('/test', (req, res) => {
  res.status(200).send({ message: 'get response', env: process.env.DB_CONNECTION });
});

app.use('/user', userRoutes);
app.use('/question', questionRoutes);
app.use('/essay', essayRoutes);
app.use('/feedback', feedbackRoutes);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log(`connected to the database at port ${PORT}`);
});

//listening to the server
app.listen(PORT);