const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", {
    arrayMascotas: [
      { id: "jajaja", nombre: "rex" },
      { id: "jsjsjs", nombre: "sam" },
    ],
  });
});
module.exports = router;
