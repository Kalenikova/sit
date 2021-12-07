//подключение зависимостей
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//извлекает всю часть тела входящего потока запросов
//и выставляет его на req.body
const port = 8000;

app.use(bodyParser.text());
// Читает буфер как обычный текст
//и предоставляет результирующую строку на req.body

var strings = [];

app.get("/", (req, res) =>
  res.send(
    "Send POST request to /create in order to save new string, GET request to /list to see the strings"
  )
);

app.get("/list", function (req, res) {
  res.send(strings.toString());
  //возвращает строку, представляющую указанный объект
});

app.post("/create", function (req, res) {
  strings.push(req.body);
  //вставляем в массив строку
  console.log("Request Body: " + req.body);
  //получение данных в консоле
  res.send("String is saved");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//прослушивание HTTP-запросов
