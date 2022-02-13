const express = require("express");
const router = express.Router();
const Mascota = require("../Models/mascota");
router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    res.render("mascotas", {
      arrayMascotas: arrayMascotasDB,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/crear", (req, res) => {
  res.render("crear");
});
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    await Mascota.create(body);
    res.redirect("/mascotas");
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const mascota = await Mascota.findOne({ _id: id });
    res.render("detalle", {
      mascota,
    });
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const mascota = await Mascota.findByIdAndDelete({ _id: id });
    if (mascota) {
      // res.redirect("/mascotas");
      res.json({
        estado: true,
      });
    } else {
      res.json({
        estado: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
