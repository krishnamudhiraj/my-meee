var { createPayment } = require("./createPayment");
var { sendCodeMail } = require("./sendCodeMail");
var { sendCodeMailSchool } = require("./sendCodeMailSchool");
// var { sendMePDF } = require("./sendMePDF");

const functions = require('firebase-functions');
var express = require("express");
var cors = require('cors');

var app = express();
app.use(cors());

app.post("/createPayment", async (request, response) => {
  try {
    await createPayment(request, response);
  } catch (error) {
    console.log("Error - createPayment: ", error);
  }
});

app.post("/sendCodeMail", async (request, response) => {
  try {
    await sendCodeMail(request, response);
  } catch (error) {
    console.log("Error - sendCodeMail: ", error);
  }
});

app.post("/sendCodeMailSchool", async (request, response) => {
  try {
    await sendCodeMailSchool(request, response);
  } catch (error) {
    console.log("Error - sendCodeMailSchool: ", error);
  }
});

app.post("/sendMePDF", async (request, response) => {
  try {
    // await sendMePDF(request, response);
  } catch (error) {
    console.log("Error - sendMePDF: ", error);
  }
});

exports.api = functions.https.onRequest(app);


