const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mascotaShema = new Schema({
  nombre: String,
  desripcion: String,
});
/* -------------------------------------------------------------------------- */
/*                             Creacion del modelo                            */
/* -------------------------------------------------------------------------- */
const Mascota = mongoose.model("Mascota", mascotaShema);
module.exports = Mascota;
