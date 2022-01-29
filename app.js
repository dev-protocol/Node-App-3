// getPokemon = async () => {
//   try {
//     const res = await fetch("url");
//     const data = await res.json();
//     console.log(data.cowsay);
//   } catch (error) {
//     console.log(error);
//   }
// };

const http = require("http");
const server = http.createServer((req, res) => {
  res.end("estoy respondiendo a tu solicitud v2");
});

const port = 4000;

server.listen(port, () => {
  console.log("escuchando solicitudes");
});
