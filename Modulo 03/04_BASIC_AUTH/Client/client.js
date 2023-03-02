var http = require("http");
var request = require("request");

var username = "admin";
var password = "numsey";
var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");

var url = "http://localhost:3000/";

request.get(
  {
    url: url,
    headers: {
      Authorization: auth,
    },
  },
  function (error, response, body) {
    console.log("body : ", body);
  }
);
