"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("./config/keys"),
    sendGridKey = _require.sendGridKey;

const sendgridemail = require("@sendgrid/mail");

sendgridemail.setApiKey(sendGridKey);

exports.sendCodeMailSchool =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (request, response) {
    const msg = {
      to: request.body.email,
      from: "info@meee.global",
      subject: "Meee",
      text: `Hi, Code for ${request.body.school} is ${request.body.codes}. This code can only be accessed by atmost ${request.body.allowed_users} users.` // html: "<strong>:)</strong>"

    };
    yield sendgridemail.send(msg);
    response.send(true);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();