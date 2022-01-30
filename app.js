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
/* -------------------------------------------------------------------------- */
/*                                  Rutas Web                                 */
/* -------------------------------------------------------------------------- */
app.use("/", require("./Router/web"));
app.use("/mascotas", require("./Router/Mascotas"));
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "Titulo de 404",
    descripcion: "Página 404",
  });
});

app.listen(port, () => {
  console.log("Servidor a su servicio en el puerto ", port);
});
