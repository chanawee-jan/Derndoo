const admin = require("firebase-admin");
const functions = require("firebase-functions");
const next = require("next");
const config = require("./next.config");

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: config,
});
const handle = app.getRequestHandler();

const server = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested

  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});

exports.nextjs = { server };

const express = require('express')
const appexpress = express()
const port = 4000

const axios = require('axios');
const https = require('https');

var cors = require('cors');
var corsOptions = {
  origin: '*'
};

appexpress.use(cors(corsOptions))

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});
appexpress.use(express.json())
appexpress.all('*', (req, res) => {
  instance[req.method.toLowerCase()](`https://167.99.66.145:8443${req.url}`, req.body).then(function (response) {
    //res.send(req.url);
    console.log(response);
    res.status(response.status).send(response.data);
  })
    .catch(function (error) {
      console.log(error);
      res.status(error.response.status).send(error.response.data);
    })
})

appexpress.listen(port, () => {
  console.log('Done!')
})

exports.appexpress = functions.https.onRequest(appexpress);