const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
const PORT = 3001;

const allowedDomains = ['https://bonufo-react.vercel.app']

const corsOptions = {
  origin: allowedDomains,
  optionSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BONUFO API with Swagger",
      version: "1.0.0",
      description:
        "This is an English Writing Response API application made with Express and documented with Swagger",
      contact: {
        "name": "Feena Fung",
        "url": "https://github.com/devfeefung79",
        "email": "devfeefung79@gmail.com"
      },
        license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3001/",
        description: "Local server"
      },
      {
        url: "https://bonufo-express.vercel.app/",
        description: "Production server"
      }
    ],
    tags: [
      {
        name: 'Essay',
        description: 'Requests associated with writing essays responding to the questions'
      },
      {
        name: 'Feedback',
        description: 'Requests associated with giving feedbacks to essays'
      },
      {
        name: 'Question',
        description: 'Requests associated with questions on the platform'
      },
      {
        name: 'User',
        description: 'Requests associated with user accounts'
      },
    ]
  },
  apis: ["./routes/*.js"],
  components: {
    schemas: {
      UserLogin: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: { type: 'string', example: 'davidkong12'},
          password: { type: 'string', example: 'pass1234'}
        },
      },
    },
  },
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    },
  },
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

//import routes
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const essayRoutes = require('./routes/essayRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

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
