const app = require("express")();
const basicAuth = require("express-basic-auth");

app.use(
  basicAuth({
    users: { admin: "numsey" },
    unauthorizedResponse: getUnauthorizedResponse,
    challenge: true,
  })
);

function getUnauthorizedResponse(req) {
  return req.auth
    ? "Credentials " + req.auth.user + ":" + req.auth.password + " rejected"
    : "No credentials provided";
}

app.get("/", (req, res) => {
  res.send("Aqui tudo OK !");
});

app.get("/test", (req, res) => {
  res.send("Aqui também tudo OK !");
});

app.listen(3000, () => {
  console.log("Servidor rodando ...");
});
