const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
/* -------------------------------------------------------------------------- */
/*                             Conexion a MongoDB                             */
/* -------------------------------------------------------------------------- */
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD}@cluster0.kmtoc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("Base de datos Conectada"))
  .catch((e) => console.log(e));
/* -------------------------------------------------------------------------- */
/*                         Asignar el motor de vistas                         */
/* -------------------------------------------------------------------------- */
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
/* -------------------------------------------------------------------------- */
/*                   Declarar la ruta de la carpeta estatica                  */
/* -------------------------------------------------------------------------- */
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
