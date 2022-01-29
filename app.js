// getPokemon = async () => {
//   try {
//     const res = await fetch("url");
//     const data = await res.json();
//     console.log(data.cowsay);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("estoy respondiendo a tu solicitud v2");
// });

// const port = 4000;

// server.listen(port, () => {
//   console.log("escuchando solicitudes");
// });
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinámico2" });
});

app.get("/servicios", (req, res) => {
  res.send("Estás en la página de servicios");
});

app.listen(port, () => {
  console.log("Servidor a su servicio en el puerto ", port);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});
