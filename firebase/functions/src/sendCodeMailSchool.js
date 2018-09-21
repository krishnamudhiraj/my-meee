var { sendGridKey } = require("./config/keys");
const sendgridemail = require("@sendgrid/mail");
sendgridemail.setApiKey(sendGridKey);

exports.sendCodeMailSchool = async function(request, response) {
  const msg = {
    to: request.body.email,
    from: "info@meee.global",
    subject: "Meee",
    text: `Hi, Code for ${request.body.school} is ${request.body.codes}. This code can only be accessed by atmost ${request.body.allowed_users} users.`
    // html: "<strong>:)</strong>"
  };
  await sendgridemail.send(msg);

  response.send(true);
};
