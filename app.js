var express = require('express');
var fs = require("fs");
var token = require('./model/generar_token');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

var domain = "http://localhost:8080";

app.use(express.static('assets'));
app.use(express.static('public'));
app.use(bodyParser.json()); // peticiones aplication/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req, res){
  res.render("index", {title: "KangooDB"});
});

app.get("/login", function (req, res) {
  res.render("login", {title: "KangooDB Login"});
});

app.get("/converter/html_jade", function (req, res) {
  res.render("html_jade", {title: "Convertidor de HTML a Jade"});
});

app.get("/converter/jade_html", function (req, res) {
  res.render("jade_html", {title: "Convertidor de Jade a HTML"});
});

app.post("/users", function (req, res) {
  res.send("Hemos resivido tus datos");
});

app.get("/api/generate/token", function (req, res) {
	token.generarToken();
	res.send("token");
});

app.get("/api/:token/setting", function (req, res) {
  res.send("configuracion de token token");
});

app.get("/api/rest/update", function (req, res) {
  res.send("actualizacion de datos");
});

app.get("/api/rest/delect", function (req, res) {
  res.send("eliminacion de datos");
});

app.get("/api/rest/insert", function (req, res) {
  res.send("insercion de datos");
});

app.get("/console/javascript", function (req, res) {
  res.render("console/javascript", {domain: "../"});
});

app.get("/console", function (req, res) {
  // res.render("console/javascript", {domain: "./"});
  res.render("console/test", {domain: "./"});
})

// app.get("/console/exec", function (req, res) {
// 	console.log(req.body);
// 	res.send("adios")
// })
// app.post("/console/exec", function (req, res) {
// 	console.log(req.body);
// 	res.send(req.body.data)
// })
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
