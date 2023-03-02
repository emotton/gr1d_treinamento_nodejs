var http = require("http");
var request = require("request");

var username = "AdminIntegracao";
var password = "Detran454123";
var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");

var url =
  "http://integracao-portal-prod.app.detran.df/integracao/v1/marketPlace/gera/boleto";

request.post(
  {
    url: url,
    /*
    headers: {
      Authorization: auth,
    }, */
  },
  function (error, response, body) {
    console.log("response : ", response.data);
    console.log("body : ", body);
  }
);
