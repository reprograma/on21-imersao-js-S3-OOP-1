const Developer = require("./Developer.js")

const creatPerfilDani = new Developer(
  "Danielle",
  "dani@gmail.com",
  "(00)0000-0000",
  ["html", "css"]
);
console.log(creatPerfilDani.getName());
