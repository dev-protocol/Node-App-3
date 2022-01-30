const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinámico2" });
});

router.get("/servicios", (req, res) => {
  res.render("servicio", { tituloServicios: "Titulo Servicio" });
});

module.exports = router;
