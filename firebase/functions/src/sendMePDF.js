const React = require('react');
var { sendGridKey } = require("./config/keys");
const sendgridemail = require("@sendgrid/mail");
sendgridemail.setApiKey(sendGridKey);
var ReactPDF = require('@react-pdf/renderer');
const PdfFF = require('./PdfFF');

exports.sendMePDF = async function(request, response) {
    console.log("Backend data: ", request.body);
    const myTopFiveCardsRanking = request.body.myTopFiveCardsRanking;
    ReactPDF.render(<PdfFF data={myTopFiveCardsRanking} />, "./ValuesCards.pdf");

    response.send(true)
    
//   const msg = {
//     to: request.body.email,
//     from: "dhirendra@geekyants.com",
//     subject: "Meee",
//     text: "Hi " + request.body.name + ", Your code is " + request.body.code
//     // html: "<strong>:)</strong>"
//   };
//   const mailResponse = await sendgridemail.send(msg);

//   response.send(mailResponse);
};
