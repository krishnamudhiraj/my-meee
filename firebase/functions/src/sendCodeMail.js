var { sendGridKey } = require("./config/keys");
const sendgridemail = require("@sendgrid/mail");
sendgridemail.setApiKey(sendGridKey);

exports.sendCodeMail = async function(request, response) {
  const msg = {
    to: request.body.email,
    from: "info@meee.global",
    subject: "Meee",
    text: "Hi " + request.body.name + ", Your code is " + request.body.code
    // html: "<strong>:)</strong>"
  };
  const mailResponse = await sendgridemail.send(msg);

  response.send(mailResponse);
};
